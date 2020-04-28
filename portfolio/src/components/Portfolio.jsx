import React, { useState } from 'react';
import { ProjectGrid } from '../styles/PortfolioStyles';
import Project from './Project';

const Portfolio = () => {
  const writing = [
    {
      url: 'https://kingofathousandworlds.wordpress.com/',
      name: 'Blog',
      img: '/images/dom_alex_300.jpg',
      imgAlt: 'Alexendar, Civ 5',
      blurb:
        'This project reflects an old attempt at creating a strategy gaming blog, on top of an even older attempt to provide play-by-play records of the games I played.'
    },
    {
      url:
        'https://www.rockpapershotgun.com/2016/04/26/civilization-v-community-patch-project/',
      name: 'RPS',
      img: '/images/William300.jpeg',
      imgAlt: 'William, Civ 5',
      blurb:
        'One of my proudest moments was writing a guest article for Rock, Paper, Shotgun, one of the biggest (and one of the best) games journalism sites out there.'
    },
    {
      url:
        'https://unwinnable.com/2016/03/21/the-bad-luck-issue-theme-recap-77/',
      name: 'Unwinnable',
      img: '/images/Bad-Luck300.jpg',
      imgAlt: 'Assassination of Caesar',
      blurb:
        'Unwinnable is a digital subscription magazine that tries to focus on the less-talked-about aspects of pop culture, and celebrates them. My contribution to their 77th issue focuses on bad luck in games, and why it might actually be all your fault.'
    },
    {
      url: 'https://github.com/sgwicks',
      name: 'Github',
      img: '/images/GitHub.png',
      imgAlt: 'Github Mark',
      blurb: 'For now this links to github.'
    }
  ];

  const coding = [
    {
      url: 'https://github.com/sgwicks/nc-news',
      name: 'NC_News_BE',
      img: '/images/NCNewsJSON.jpg',
      imgAlt: 'NC News Backend',
      blurb: 'NC News Backend'
    },
    {
      url: 'https://github.com/sgwicks/nc-news-site',
      name: 'NC_News_FE',
      img: '/images/NCNewsSite.jpg',
      imgAlt: 'NC News Frontend',
      blurb: 'NC News Frontend'
    },
    {
      url: 'https://github.com/sgwicks/gatherers',
      name: 'gatherers',
      img: '/images/Tent.jpg',
      imgAlt: 'Gatherers',
      blurb: 'Gatherers'
    },
    {
      url: 'https://github.com/sgwicks',
      name: 'Github',
      img: '/images/GitHub.png',
      imgAlt: 'Github',
      blurb: 'For now this links to github.'
    }
  ];

  const [portfolio, setPortfolio] = useState(writing);

  return (
    <main>
      <h2>Portfolio</h2>
      <button onClick={() => setPortfolio(writing)}>Writing</button>
      <button onClick={() => setPortfolio(coding)}>Coding</button>
      <ProjectGrid>
        {portfolio.map((project) => (
          <Project {...project} />
        ))}
      </ProjectGrid>
      <section>
        <p></p>
      </section>
    </main>
  );
};

export default Portfolio;
