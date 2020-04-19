import React from 'react';

const Portfolio = () => {
  return (
    <main>
      <section>
        <h2>Portfolio</h2>
        <p>A grid layout of project links</p>
      </section>
      <section class='project-grid'>
        <a
          href='https://kingofathousandworlds.wordpress.com/'
          class='project-1 box-link'
          target='_blank'></a>
        <div class='project-1 preview'>
          <div class='project-box'>
            This project reflects and old attempt at creating a strategy gaming
            blog, on top of an even older attempt to provide play-by-play
            records of the games I played.
          </div>
        </div>
        <a
          href='https://www.rockpapershotgun.com/2016/04/26/civilization-v-community-patch-project/'
          class='project-2 box-link'
          target='_blank'></a>
        <div class='project-2 preview'>
          <div class='project-box'>
            One of my proudest moments was writing a guest article for Rock,
            Paper, Shotgun, one of the biggest (and one of the best) games
            journalism sites out there.
          </div>
        </div>
        <a
          href='https://unwinnable.com/2016/03/21/the-bad-luck-issue-theme-recap-77/'
          class='project-3 box-link'
          target='_blank'></a>
        <div class='project-3 preview'>
          <div class='project-box'>
            Unwinnable is a digital subscription magazine that tries to focus on
            the less-talked-about aspects of pop culture, and celebrates them.
            My contribution to their 77th issue focuses on bad luck in games,
            and why it might actually be all your fault.
          </div>
        </div>
        <a href='contact.html' class='project-4 box-link' target='_blank'></a>
        <div class='project-4 preview'>
          <div class='project-box'>
            For now this links back to the contact page.
          </div>
        </div>
      </section>
      <section>
        <p></p>
      </section>
    </main>
  );
};

export default Portfolio;
