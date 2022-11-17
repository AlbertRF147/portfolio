// react
import * as React from 'react';
// data
import navLinks from 'constants/navLinks';
import pages from 'constants/pages';
import projectsData, { Project } from 'constants/projectsData';
import experiencePosts from 'constants/experiencePostsData';
// type
import { NavLink } from 'constants/navLinks';
import { Pages } from 'constants/pages';
import { ExperiencePost, ExperiencePostDetails } from 'types/experiencePostType';

interface ContextProps {
  navLinks?: NavLink[];
  pages?: Pages;
  projects?: Project[];
  experiencePosts?: ExperiencePost[];
}

const context: ContextProps = {
  navLinks,
  pages,
  projects: projectsData,
  experiencePosts,
};

const ConstantsContext = React.createContext(context);

export default ConstantsContext;
