// type
import { ExperiencePostCategory } from 'types/categoryType';
import { ImageProps } from 'types/imageType';

export interface ExperiencePostDetails {
  category: ExperiencePostCategory[];
  id: string;
  image: ImageProps;
  filename: string;
  title: string;
}

export interface ExperiencePost extends ExperiencePostDetails {
  likes: number;
}
