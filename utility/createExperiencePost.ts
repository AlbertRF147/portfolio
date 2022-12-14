// type
import { ExperiencePost, ExperiencePostDetails } from 'types/experiencePostType';

export const createPost = (props: ExperiencePostDetails): ExperiencePost => {
  const { category, id, image, filename, title } = props;

  return {
    category,
    id,
    image,
    filename,
    title,
    get likes() {
      return this.image.likes;
    },
  };
};
