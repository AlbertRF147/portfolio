const Mailjet = require('node-mailjet') //Yes, I used require in typescript like this
import { SendEmailV3_1 } from 'node-mailjet'
import { NextApiRequest, NextApiResponse } from 'next'
import { DomainVerificationRounded, VaccinesRounded } from '@mui/icons-material'
import { verify } from 'crypto'

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
})

interface CaptchaResponse extends Response {
  success: boolean
  challenge_ts: number
  hostname: string
  'error-codes'?: string[]
}

const validateToken = async (token: string) => {
  const verification = (await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PRIVATE_RECAPTCHA_SITE_KEY}&response=${token}`,
    {
      method: 'POST'
    }
  ).then((res) => res.json())) as CaptchaResponse
  if (verification) return verification.success
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, email, subject, message, name } = req.body
  const isValidToken = await validateToken(token)
  if (!isValidToken) return res.status(500).json({ message: 'Invalid captcha' })

  const data: SendEmailV3_1.IBody = {
    Messages: [
      {
        From: {
          Email: email,
        },
        To: [
          {
            Email: 'bandicot160@gmail.com',
          },
        ],
        Subject: `Nou missatge del portfolio - ${name}`,
        HTMLPart: `
            <h3>${name} - ${subject}</h3>
            <p>${message}</p>
          `,
        TextPart: message,
      },
    ],
  }

  try {
    const result = await mailjet.post('send', { version: 'v3.1' }).request(data)
    const { Status } = result.body.Messages[0]
    res.status(200).json({ response: 'Message sent' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ response: 'Error' })
  }
}
