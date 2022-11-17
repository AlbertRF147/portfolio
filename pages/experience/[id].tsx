// react
import * as React from 'react';
// dayjs
import dayjs from 'dayjs';
// reading-time
import readingTime from 'reading-time';
// @mui
import { Box, BoxProps, Grid, Typography, styled } from '@mui/material';
// custom component
import Markdown from 'components/common/Markdown';
import MainLayout from 'components/layout/MainLayout';
// experiencePost data
import experiencePosts from 'constants/experiencePostsData';
// custom lib
import { getExperiencePostsId, getExperiencePostById } from 'lib/experiencePost';
// type
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { ExperiencePost as ExperiencePostDataProps } from 'types/experiencePostType';
import ProjectNotFound from 'components/section/ProjectNotFound';
import ContainerGrid from 'components/common/ContainerGrid';
interface ExperiencePostProps {
  experiencePost?: string;
  content?: string;
}

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '10rem 1rem 1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '10rem 2rem 1rem',
  },
}));

const ExperiencePost: NextPage<ExperiencePostProps> = (props) => {
  const { experiencePost, content = '' } = props;

  if (!experiencePost) return <ProjectNotFound />;

  const parsedExperiencePost: ExperiencePostDataProps = JSON.parse(experiencePost);
  const { text: readTime } = readingTime(content);
  const date = dayjs(parsedExperiencePost.date);

  return (
    <MainLayout>
      <CustomContainer>
        <Typography component="h1" textAlign="center" variant="h4">
          {parsedExperiencePost.title}
        </Typography>
        <Typography
          color="text.secondary"
          component="p"
          marginTop="1rem"
          textAlign="center"
          variant="body1"
        >
          {readTime} - Published at {date.toDate().toDateString()}
        </Typography>
        <ContainerGrid>
          <Grid item xs={12} md={8} sx={{ margin: '3rem auto 1rem' }}>
            <Markdown content={content} />
          </Grid>
        </ContainerGrid>
      </CustomContainer>
    </MainLayout>
  );
};

export default ExperiencePost;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const experiencePost = experiencePosts.find((experiencePost) => experiencePost.id === params!.id);

  if (!experiencePost) return { props: {} };

  const filename = experiencePost.filename;
  const { content } = await getExperiencePostById(filename);

  if (!content)
    return {
      props: {
        experiencePost: JSON.stringify(experiencePost),
      },
    };

  return {
    props: {
      experiencePost: JSON.stringify(experiencePost),
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getExperiencePostsId();

  return {
    paths,
    fallback: 'blocking',
  };
};
