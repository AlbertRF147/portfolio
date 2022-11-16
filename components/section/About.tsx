// react
import * as React from 'react';
// next
import Image from 'next/image';
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
  createTheme,
} from '@mui/material';
// custom component
import FacebookIconLink from 'components/common/FacebookIconLink';
import InstagramIconLink from 'components/common/InstagramIconLink';
import TwitterIconLink from 'components/common/TwitterIconLink';
import ContainerGrid from 'components/common/ContainerGrid';
import ExpandMoreIconButton from 'components/common/ExpandMoreIconButton';
// type
interface AboutProps {}

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '21rem',
  [theme.breakpoints.up(350)]: {
    height: '26rem',
  },
  [theme.breakpoints.up('sm')]: {
    height: '50vh',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
}));

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  scrollMarginTop: '1rem',
  [theme.breakpoints.up('sm')]: {
    scrollMarginTop: '2rem',
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: '1rem',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    height: 'fit-content',
  },
  [theme.breakpoints.up('lg')]: {
    height: '70vh',
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: 0,
    },
  })
);

const CustomTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem'
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem'
  },
}))

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  React.useEffect(() => {
    if (isUpMd) setShowMore(true);
    else setShowMore(false);
  }, [isUpMd]);

  return (
    <CustomContainer id="about">
      <CustomCard>
        <ContainerGrid sx={{ marginTop: 0, height: '100%' }}>
          <Grid item xs={12} md={6} lg={5} style={{ padding: 0 }}>
            <ImageWrapper>
              <Image
                alt="John Doe profile image"
                layout="fill"
                objectFit="cover"
                objectPosition="left center"
                onLoad={() => setIsLoaded(true)}
                src="/profile.jpeg"
              />
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    backgroundColor: 'currentcolor',
                    height: '100%',
                    position: 'absolute',
                    width: '100%',
                  }}
                />
              )}
            </ImageWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            style={{ padding: '2rem', position: 'relative' }}
          >
            <Card
              sx={{ boxShadow: 'none', height: '100%', position: 'relative' }}
            >
              <Typography component="h2" variant="h4" fontWeight="bold">
                A bit about me
              </Typography>
              <CardContent>
                  <Typography variant='body1'>
                    Frontend developer, with +3 years of experience mostly in ecommerce. I have great versatility and often I like to jump onto the back-end. Specialised in building pixel-perfect user experiences with huge amounts of traffic everyday. Used to work in fast-paced and high-demanding environments. A problem solver with strong troubleshooting skills. Overall, a fast learner, resilient and a great communicator.
                  </Typography>
                {/* <Collapse
                  in={showMore}
                  sx={{
                    p: {
                      marginTop: '0.5rem',
                    },
                  }}
                  timeout="auto"
                  unmountOnExit
                >
                  <Typography component="p" variant="body1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sed quis, vitae ea repellendus pariatur nihil ad cupiditate
                    minima et quasi laborum. Amet eius, aliquam impedit modi
                    tempore doloribus iusto. Nobis nam, unde officia iusto
                    repellat obcaecati temporibus recusandae corrupti odit
                    voluptatem dolor est ullam ad eligendi eum, et molestiae.
                    Possimus porro adipisci reiciendis corrupti dignissimos fuga
                    aliquam aperiam quisquam praesentium.
                  </Typography>
                </Collapse> */}
              </CardContent>
              <CustomCardActions disableSpacing>
                {!isUpMd && (
                  <ExpandMoreIconButton
                    open={showMore}
                    onClick={() => setShowMore(!showMore)}
                    sx={{
                      justifySelf: 'flex-start',
                    }}
                  />
                )}
                <div>
                  <FacebookIconLink />
                  <InstagramIconLink />
                  <TwitterIconLink />
                </div>
              </CustomCardActions>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
