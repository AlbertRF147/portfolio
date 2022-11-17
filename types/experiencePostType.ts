// type
import { Dayjs } from 'dayjs';

import { ExperiencePostCategory } from 'types/categoryType';
import { ImageProps } from 'types/imageType';

export interface ExperiencePostDetails {
  category: ExperiencePostCategory[];
  date: Dayjs;
  id: string;
  image: ImageProps;
  filename: string;
  title: string;
}

export interface ExperiencePost extends ExperiencePostDetails {
  likes: number;
}
