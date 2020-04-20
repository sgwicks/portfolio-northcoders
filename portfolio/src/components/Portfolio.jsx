import React from 'react';
import { ProjectGrid, ProjectBox, ProjectImg } from '../styles/PortfolioStyles';
import Alex from '../images/dom_alex_300.jpg';

const Portfolio = () => {
  return (
    <main>
      <h2>Portfolio</h2>
      <ProjectGrid>
        <ProjectBox href='https://kingofathousandworlds.wordpress.com/'>
          <ProjectImg src={Alex} alt='Alex' />
          <br />
          This project reflects and old attempt at creating a strategy gaming
          blog, on top of an even older attempt to provide play-by-play records
          of the games I played.
        </ProjectBox>

        <ProjectBox href='https://www.rockpapershotgun.com/2016/04/26/civilization-v-community-patch-project/'>
          <ProjectImg src={Alex} alt='Alex' />
          <br />
          One of my proudest moments was writing a guest article for Rock,
          Paper, Shotgun, one of the biggest (and one of the best) games
          journalism sites out there.
        </ProjectBox>

        <ProjectBox href='https://unwinnable.com/2016/03/21/the-bad-luck-issue-theme-recap-77/'>
          <ProjectImg src={Alex} alt='Alex' />
          <br />
          Unwinnable is a digital subscription magazine that tries to focus on
          the less-talked-about aspects of pop culture, and celebrates them. My
          contribution to their 77th issue focuses on bad luck in games, and why
          it might actually be all your fault.
        </ProjectBox>

        <ProjectBox href='https://github.com/sgwicks'>
          <ProjectImg src={Alex} alt='Alex' />
          <br />
          For now this links to github.
        </ProjectBox>
      </ProjectGrid>
      <section>
        <p></p>
      </section>
    </main>
  );
};

export default Portfolio;
