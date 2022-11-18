// react
import * as React from 'react';
// next
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardProps,
  CardActions,
  CardContent,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Typography,
  styled,
  useTheme,
  Container,
  Badge,
} from '@mui/material';
// @mui icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
// custom component
import CustomButton from 'components/common/CustomButton';
import { SiJavascript, SiMaterialui, SiMongodb, SiNextdotjs, SiReact, SiVuedotjs } from 'react-icons/si';
import { IconContext } from 'react-icons';
// type
interface ProjectCardProps extends CardProps {
  imageAlt: string;
  imageSrc: string;
  title: string;
  likes: number;
  description?: string;
  stack?: string[];
  onButtonClick?: () => void;
}

interface StackProps {
  name: string;
}

const StackIcon: React.FunctionComponent<StackProps> = (props) => {
  const { name } = props
  switch (name) {
    case 'react':
      return <SiReact />
  
    case 'vue':
      return <SiVuedotjs />
  
    case 'next':
      return <SiNextdotjs />
  
    case 'mui':
      return <SiMaterialui />
  
    case 'vanilla':
      return <SiJavascript />
  
    case 'mongodb':
      return <SiMongodb />

    default:
      return null
  }
}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  img: {
    transition: 'all 0.5s ease-in-out',
  },
  '&: hover': {
    img: {
      transition: 'all 0.5s ease-in-out',
      transform: 'scale(1.4)',
      filter: 'blur(2px)',
      WebkitFilter: 'blur(2px)',
    },
  },
}));

const ImageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  margin: '1rem',
  height: '12rem',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const ProjectCard: React.FunctionComponent<ProjectCardProps> = (props) => {
  const { imageAlt, imageSrc, likes, title, description, stack, onButtonClick, ...otherProps } =
    props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  const {
    palette: { primary },
  } = useTheme();

  return (
    <CustomCard {...otherProps}>
      <ImageContainer>
        <Image
          alt={imageAlt}
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          onLoad={() => setIsLoaded(true)}
          quality={30}
        />
        {!isLoaded && (
          <Skeleton
            variant="rectangular"
            sx={{ backgroundColor: primary.main, height: '100%' }}
          />
        )}
      </ImageContainer>
      <CardContent>
        <Typography component="h3" variant="h6" textAlign="center">
          {isLoaded ? (
            title
          ) : (
            <Skeleton sx={{ backgroundColor: primary.main }} />
          )}
        </Typography>
        <Typography component="p" variant='body2'>
          {isLoaded ? (
            description
          ) : (
            <Skeleton sx={{ backgroundColor: primary.main }} />
          )}
        </Typography>
        <Container sx={{ display: 'flex', justifyContent: 'end' }}>
          {stack && stack.map((_stack, i) => (
            <Badge sx={{ padding: 1 }}>
              <IconContext.Provider value={{ size: '1.4rem' }}>
                <StackIcon key={`stack-${i}`} name={_stack} />
              </IconContext.Provider>
            </Badge>
          ))}
        </Container>
      </CardContent>
    </CustomCard>
  );
};

export default ProjectCard;
