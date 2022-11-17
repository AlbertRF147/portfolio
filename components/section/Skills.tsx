// react
import * as React from 'react';
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from '@mui/material';
// custom component
import ContainerGrid from 'components/common/ContainerGrid';
import SkillProgress from 'components/common/SkillProgress';
// custom icons
import IllustratorCCIcon from 'components/icon/IllustratorCC';
import LightroomCCIcon from 'components/icon/LightroomCC';
import PhotoshopIcon from 'components/icon/Photoshop';
// context
import ComponentsContext from 'context/componentsContext';
// type
interface SkillsProps {}
// icons
import { IconContext } from "react-icons";
import { FaCss3, FaJs, FaNode, FaReact } from 'react-icons/fa';
import { SiJquery, SiMaterialui, SiMongodb, SiMysql, SiNextdotjs, SiVuedotjs } from 'react-icons/si'

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: '5rem',
  marginTop: '5rem',
  scrollMarginTop: '2rem',
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: (
        // <PhotoshopIcon bgColor="white" textColor="tomato" fontSize="large" />
        <IconContext.Provider value={{ size: '3rem' }}>
          <FaReact />
        </IconContext.Provider>
      ),
      title: 'React',
      progressValue: 80,
    },
    {
      Icon: (
        // <PhotoshopIcon bgColor="white" textColor="tomato" fontSize="large" />
        <IconContext.Provider value={{ size: '2rem' }}>
          <SiMaterialui />
        </IconContext.Provider>
      ),
      title: 'MUI',
      progressValue: 60,
    },
    {
      Icon: (
        // <PhotoshopIcon bgColor="white" textColor="tomato" fontSize="large" />
        <IconContext.Provider value={{ size: '2rem' }}>
          <SiNextdotjs />
        </IconContext.Provider>
      ),
      title: 'NextJS',
      progressValue: 60,
    },
    {
      Icon: (
        // <PhotoshopIcon bgColor="white" textColor="tomato" fontSize="large" />
        <IconContext.Provider value={{ size: '2rem' }}>
          <SiVuedotjs />
        </IconContext.Provider>
      ),
      title: 'VueJS',
      progressValue: 55,
    },
    {
      Icon: (
        <IconContext.Provider value={{ size: '2rem' }}>
          <FaJs />
        </IconContext.Provider>
      ),
      title: 'Javascript',
      progressValue: 90,
    },
    {
      Icon: (
        <IconContext.Provider value={{ size: '3rem' }}>
          <FaNode />
        </IconContext.Provider>
      ),
      title: 'NodeJS',
      progressValue: 70,
    },
    {
      Icon: (
        <IconContext.Provider value={{ size: '2rem' }}>
          <FaCss3 />
        </IconContext.Provider>
      ),
      title: 'CSS',
      progressValue: 90,
    },
    {
      Icon: (
        <IconContext.Provider value={{ size: '2rem' }}>
          <SiJquery />
        </IconContext.Provider>
      ),
      title: 'JQuery',
      progressValue: 90,
    },
    {
      Icon: (
        <IconContext.Provider value={{ size: '3rem' }}>
          <SiMongodb />
        </IconContext.Provider>
      ),
      title: 'MongoDB',
      progressValue: 70,
    },
  ];

  return (
    <>
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Typography component="h2" variant="h4" textAlign="center">
          My Skills
        </Typography>
        <ContainerGrid marginTop="2rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs={6}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                subtitle={`${skill.title}`}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
