import React, { useState } from 'react';
import {
  ProjectGrid,
  ProjectButton,
  ButtonDisplay
} from '../styles/PortfolioStyles';
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
      blurb:
        'My GitHub account. Feel free to take a deeper look at all my projects'
    }
  ];

  const coding = [
    {
      url: 'https://github.com/sgwicks/nc-news',
      name: 'NC_News_BE',
      img: '/images/NCNewsJSON.jpg',
      imgAlt: 'NC News Backend',
      blurb:
        'An API for a reddit-style news/social media site where users can post articles and comments, and vote on posted articles and comments. Built using Express.js with Mocha and Supertest for testing.'
    },
    {
      url: 'https://github.com/sgwicks/nc-news-site',
      name: 'NC_News_FE',
      img: '/images/NCNewsSite.jpg',
      imgAlt: 'NC News Frontend',
      blurb:
        'A website utilising my backend API. Users can view all articles or filter by topic, view single articles, post new comments and vote on previous articles and comments. Built using React.js'
    },
    {
      url: 'https://github.com/sgwicks/gatherers',
      name: 'gatherers',
      img: '/images/Tent.jpg',
      imgAlt: 'Gatherers',
      blurb:
        'A personal, ongoing project. Gatherers is a game in which players must grab apples to grow their tribe against a slow but inevitable starvation counter'
    },
    {
      url: 'https://github.com/sgwicks',
      name: 'Github',
      img: '/images/GitHub.png',
      imgAlt: 'Github',
      blurb:
        'My GitHub account. Feel free to take a deeper look at all my projects'
    }
  ];

  const [portfolio, setPortfolio] = useState(coding);
  const [active, setActive] = useState('coding');

  return (
    <main>
      <ButtonDisplay>
        <ProjectButton
          active={active === 'coding'}
          onClick={() => {
            setPortfolio(coding);
            setActive('coding');
          }}>
          Coding
        </ProjectButton>
        <ProjectButton
          active={active === 'writing'}
          onClick={() => {
            setPortfolio(writing);
            setActive('writing');
          }}>
          Writing
        </ProjectButton>
      </ButtonDisplay>
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
