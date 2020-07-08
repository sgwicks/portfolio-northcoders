import React from 'react';
import {
  ProjectGrid
} from '../styles/PortfolioStyles';
import Project from './Project';

const Portfolio = () => {
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
      url: 'https://github.com/sgwicks/crusades',
      name: 'Crusades',
      img: '/images/Castle.png',
      imgAlt: 'Crusades Castle',
      blurb:
        'An event-based game about a monarch attempting to guide their country through all sorts of troubles while raising money and troops for a crusade.'
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

  return (
    <main>
      <ProjectGrid>
        {coding.map((project) => (
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
