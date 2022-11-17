import fs from 'fs';
import path from 'path';
import { remark } from 'remark';

const experiencePostsDir = path.join(process.cwd(), 'posts/experience');

export const getExperiencePostById = async (
  id: string
): Promise<{ content: string | null }> => {
  const experiencePostFullPath = path.join(experiencePostsDir, `${id}.md`);

  try {
    const fileContent = fs.readFileSync(experiencePostFullPath, 'utf8');

    const processedContent = await remark().process(fileContent);
    const content = processedContent.toString();

    return {
      content,
    };
  } catch (error) {
    console.error(`error - Couldn't find ${id}.mdx file to read.`);
  }

  return {
    content: null,
  };
};

export const getExperiencePostsId = () => {
  try {
    const fileNames = fs.readdirSync(experiencePostsDir);

    return fileNames.map((fileName) => ({
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }));
  } catch (error) {
    console.log(`error - Couldn't read this dir files: ${experiencePostsDir}`);
  }

  return [
    {
      params: {
        id: '',
      },
    },
  ];
};
