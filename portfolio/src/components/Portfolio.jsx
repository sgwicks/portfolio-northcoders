import React from 'react';

const Portfolio = () => {
  return (
    <main>
      <section>
        <h2>Portfolio</h2>
        <p>A grid layout of project links</p>
      </section>
      <section className='project-grid'>
        <a
          href='https://kingofathousandworlds.wordpress.com/'
          className='project-1 box-link'>
          <div className='project-1 preview'>
            <div className='project-box'>
              This project reflects and old attempt at creating a strategy
              gaming blog, on top of an even older attempt to provide
              play-by-play records of the games I played.
            </div>
          </div>
        </a>

        <a
          href='https://www.rockpapershotgun.com/2016/04/26/civilization-v-community-patch-project/'
          className='project-2 box-link'>
          <div className='project-2 preview'>
            <div className='project-box'>
              One of my proudest moments was writing a guest article for Rock,
              Paper, Shotgun, one of the biggest (and one of the best) games
              journalism sites out there.
            </div>
          </div>
        </a>

        <a
          href='https://unwinnable.com/2016/03/21/the-bad-luck-issue-theme-recap-77/'
          className='project-3 box-link'>
          <div className='project-3 preview'>
            <div className='project-box'>
              Unwinnable is a digital subscription magazine that tries to focus
              on the less-talked-about aspects of pop culture, and celebrates
              them. My contribution to their 77th issue focuses on bad luck in
              games, and why it might actually be all your fault.
            </div>
          </div>
        </a>

        <a href='https://github.com/sgwicks' className='project-4 box-link'>
          <div className='project-4 preview'>
            <div className='project-box'>For now this links to github.</div>
          </div>
        </a>
      </section>
      <section>
        <p></p>
      </section>
    </main>
  );
};

export default Portfolio;
