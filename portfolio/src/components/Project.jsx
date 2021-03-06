import { ProjectBox, ProjectImg, ProjectText } from '../styles/PortfolioStyles';

import React, { useState } from 'react';

const Project = ({ url, name, img, imgAlt, blurb, title }) => {
  const [project, setProject] = useState('');

  const handleMouse = (project) => {
    setProject(project);
  };

  return (
    
    
    <ProjectBox
      href={url}
      onMouseEnter={() => handleMouse(name)}
      onTouchMove={() => handleMouse(name)}
      onMouseLeave={() => handleMouse('')}>
      
      <ProjectImg src={img} alt={imgAlt} />
      {project === name && <ProjectText><h4>{title}</h4>{blurb}</ProjectText>}
    </ProjectBox>
    
  );
};

export default Project;
