import { Badge, CardContent } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { SiGithub, SiLinkedin } from "react-icons/si"

const Socials: React.FunctionComponent = (props) => {
    const router = useRouter()

    return (
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <Badge sx={{ margin: 1, cursor: 'pointer' }}>
            <Link href='https://github.com/AlbertRF147'>
                <a target='_blank'>
                    <SiGithub />
                </a>
            </Link>
          </Badge>
          <Badge sx={{ margin: 1, cursor: 'pointer' }}>
            <Link href='https://www.linkedin.com/in/albert-fernandez-057837189/'>
                <a target='_blank'>
                    <SiLinkedin />
                </a>
            </Link>
          </Badge>
        </CardContent>
    )
}

export default Socials;