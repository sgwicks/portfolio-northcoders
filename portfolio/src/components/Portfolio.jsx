import React, { useState } from 'react';
import {
  ProjectGrid,
  ProjectBox,
  ProjectImg,
  ProjectText
} from '../styles/PortfolioStyles';
import Alex from '../images/dom_alex_300.jpg';
import William from '../images/William300.jpeg';
import BadLuck from '../images/Bad-Luck300.jpg';

const Portfolio = () => {
  const [project, setProject] = useState('');
  // const [touched, setTouched] = useState(false);

  const handleMouse = (project) => {
    setProject(project);
  };

  // const handleTouch = (event, project) => {
  //   if (!touched) {
  //     event.preventDefault();
  //     setTouched(true);
  //     setProject(project);
  //   }
  // };

  return (
    <main>
      <h2>Portfolio</h2>
      <ProjectGrid>
        <ProjectBox
          href='https://kingofathousandworlds.wordpress.com/'
          onMouseEnter={() => handleMouse('Blog')}
          onTouchMove={() => handleMouse('Blog')}
          onMouseLeave={() => handleMouse('')}>
          <ProjectImg src={Alex} alt='Alexendar, Civ 5' />
          {project === 'Blog' && (
            <ProjectText>
              This project reflects an old attempt at creating a strategy gaming
              blog, on top of an even older attempt to provide play-by-play
              records of the games I played.
            </ProjectText>
          )}
        </ProjectBox>

        <ProjectBox
          href='https://www.rockpapershotgun.com/2016/04/26/civilization-v-community-patch-project/'
          onMouseEnter={() => handleMouse('RPS')}
          onTouchMove={() => handleMouse('RPS')}
          onMouseLeave={() => handleMouse('')}>
          <ProjectImg src={William} alt='William of Orange, Civ 5' />
          {project === 'RPS' && (
            <ProjectText>
              One of my proudest moments was writing a guest article for Rock,
              Paper, Shotgun, one of the biggest (and one of the best) games
              journalism sites out there.
            </ProjectText>
          )}
        </ProjectBox>

        <ProjectBox
          href='https://unwinnable.com/2016/03/21/the-bad-luck-issue-theme-recap-77/'
          onMouseEnter={() => handleMouse('Unwinnable')}
          onTouchMove={() => handleMouse('Unwinnable')}
          onMouseLeave={() => handleMouse('')}>
          <ProjectImg src={BadLuck} alt='Assassination of Caesar' />
          {project === 'Unwinnable' && (
            <ProjectText>
              Unwinnable is a digital subscription magazine that tries to focus
              on the less-talked-about aspects of pop culture, and celebrates
              them. My contribution to their 77th issue focuses on bad luck in
              games, and why it might actually be all your fault.
            </ProjectText>
          )}
        </ProjectBox>

        <ProjectBox
          href='https://github.com/sgwicks'
          onMouseEnter={() => handleMouse('Github')}
          onTouchMove={() => handleMouse('Github')}
          onMouseLeave={() => handleMouse('')}>
          <ProjectImg src={Alex} alt='Alex' />
          {project === 'Github' && (
            <ProjectText>For now this links to github.</ProjectText>
          )}
        </ProjectBox>
      </ProjectGrid>
      <section>
        <p></p>
      </section>
    </main>
  );
};

export default Portfolio;
