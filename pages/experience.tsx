// react
import * as React from 'react';
// @mui
import { Grid, Grow, Typography } from '@mui/material';
// custom component
import ExperienceCard from 'components/common/ExperienceCard';
import ContainerGrid from 'components/common/ContainerGrid';
import MainLayout from 'components/layout/MainLayout';
// custom context
import CenterBox from 'components/common/CenterBox';
import ConstantsContext from 'context/constantsContext';
// type
import type { NextPage } from 'next';

const Experience: NextPage = (props) => {
  const { pages, experiencePosts } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.projects}>
      <Typography
        component="h1"
        marginTop="20%"
        textAlign="center"
        variant="h2"
      >
        Experience
      </Typography>
      <Typography
        color="text.secondary"
        component="p"
        marginTop="1rem"
        textAlign="center"
        variant="body1"
      >
        This has been my journey so far.
      </Typography>
      {experiencePosts ? (
        <ContainerGrid sx={{ padding: { xs: '1rem', sm: '2rem' }, justifyContent: 'center' }}>
          {experiencePosts.map((post, index) => (
            <Grow
              in={true}
              key={post.title + index}
              timeout={(index + 1) * 500}
            >
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ExperienceCard
                  href={`/experience/${post.id}`}
                  readTime={5}
                  imageAlt={post.image.alt}
                  imageSrc={post.image.src}
                  sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '21rem',
                  }}
                  title={post.title}
                />
              </Grid>
            </Grow>
          ))}
        </ContainerGrid>
      ) : (
        <CenterBox>
          <Typography component="p" variant="body1">
            No post availabe.
          </Typography>
        </CenterBox>
      )}
    </MainLayout>
  );
};

export default Experience;
