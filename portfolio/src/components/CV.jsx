import React from 'react';

const CV = () => {
  return (
    <main id='cv'>
      <h2 style={{ textAlign: 'center' }}>Curriculam Vitae</h2>
      <section className='cv-intro'>
        <h3>Sam Wicks</h3>
        <h4 className='cv-grey'>t: 07576 133368 e: samgwicks@gmail.com</h4>
        <p>
          I’m a junior developer looking for a role that will help me to enhance
          my skills and understanding, as well as my enjoyment of coding. My
          primary experience is with Javascript for coding, SQL for database
          management and React.js for app building, though I know myself to be a
          quick learner, and am yet to encounter a topic or skill I haven’t
          loved immersing myself in. I bring with me a strong work ethic, a
          bright mind and an intense curiosity in all things.
        </p>
      </section>
      <section className='cv-portfolio'>
        <h3 className='cvp-title'>Project Portfolio</h3>
        <p className='ncn-title'>Northcoders News</p>
        <p className='ncn-label'>API</p>
        <p className='ncn-link'>
          <a href='https://nc-news-now.herokuapp.com/api'>
            https://nc-news-now.herokuapp.com/api
          </a>
        </p>
        <p className='ncn-label'>Website</p>
        <p className='ncn-link'>
          <a href='https://sg-news.netlify.app/'>
            https://sg-news.netlify.app/
          </a>
        </p>
        <p className='git-title'>Github Projects</p>
        <p className='git-label'>NC News API:</p>
        <p className='git-link'>
          <a href='https://github.com/sgwicks/nc-news'>
            https://github.com/sgwicks/nc-news
          </a>
        </p>
        <p className='git-label'>NC News Website:</p>
        <p className='git-link'>
          <a href='https://github.com/sgwicks/nc-news-site'>
            https://github.com/sgwicks/nc-news-site
          </a>
        </p>
        <p className='nht-title'>Neighbourhoot</p>
        <p className='nht-label'>Github Repo:</p>
        <p className='nht-link'>
          <a href='https://github.com/sgwicks/neighbourhoot'>
            https://github.com/sgwicks/neighbourhoot
          </a>
        </p>
        <p className='nht-label'>Presentation:</p>
        <p className='nht-link'>
          <a href='https://www.youtube.com/watch?v=XOdEsIR F3VE'>
            https://www.youtube.com/watch?v=XOdEsIR F3VE
          </a>
        </p>
      </section>
      <section className='cv-tech-skills'>
        <h3>Technical Skills</h3>
        <ul className='cv-skills'>
          <li>JavaScript &amp; Node.js</li>
          <li className='cv-grey'>Linux bash</li>
          <li className='cv-grey'>Express.js​ for a RESTful CRUD API</li>
          <li>SQL</li>
          <li>React.js ​ app connected to my API</li>
          <li className='cv-grey'>HTML &amp; CSS</li>
          <li className='cv-grey'>AWS DynamoDB, S3, Lambda, API, Cognito</li>
          <li>React Native</li>
          <li>TDD (using Jest and Mocha/Chai)</li>
          <li className='cv-grey'>Pair programming</li>
          <li className='cv-grey'>Agile working practices</li>
          <li>Remote working in project team</li>
        </ul>
      </section>
      <section className='cv-experience'>
        <h3 className='exp-title'>Work Experience</h3>
        <section className='exp-job job-northcoders'>
          <p>Role:</p>
          <p>Student (Developer Bootcamp)</p>
          <p>Company:</p>
          <p>Northcoders</p>
          <p>About:</p>
          <p>
            Northcoders trains students from any background in all the coding
            skills, theories and practices that are required for a junior
            development role.
          </p>
          <p>Date:</p>
          <p>2020 March - 2020 May</p>
        </section>
        <section className='exp-job job-barista cv-grey'>
          <p>Role:</p>
          <p>Barista / Cafe Shift Leader</p>
          <p>Company:</p>
          <p>Various (Baltzersen’s, Cornerhouse Coffee, Caffe Nero)</p>
          <p>Date:</p>
          <p>2017 September - 2020 February</p>
        </section>
        <section className='exp-job job-freelance'>
          <p>Role:</p>
          <p>Freelance Writer</p>
          <p>Company:</p>
          <p>Self-Employed</p>
          <p>Date:</p>
          <p>20215 July - 2017 August</p>
        </section>
        <section className='exp-job job-seo cv-grey'>
          <p>Role:</p>
          <p>Copywriter</p>
          <p>Company:</p>
          <p>SEO 24/7</p>
          <p>Date:</p>
          <p>2014 February - 2015 July</p>
        </section>
        <section className='exp-job job-sainsburys'>
          <p>Role:</p>
          <p>Colleague - Cafe, General Merchandise</p>
          <p>Company:</p>
          <p>Sainsbury's</p>
          <p>Date:</p>
          <p>2011 December - 2014 February</p>
        </section>
      </section>
      <section className='cv-other-skills'>
        <h3>Other Skills</h3>
        <ul className='cv-skills'>
          <li>Customer service principles</li>
          <li className='cv-grey'>Staff management &amp; training</li>
          <li className='cv-grey'>Communication skills</li>
          <li>Initiative and creative thinking</li>
        </ul>
      </section>
      <section className='cv-hobbies'>
        <h3>Hobbies &amp; Interests</h3>
        <ul className='cv-skills'>
          <li>Board &amp; card games, RPGS &amp; computer games</li>
          <li className='cv-grey'>History (especially pre-C18th)</li>
          <li className='cv-grey'>Sci Fi and superhero fiction</li>
          <li>Cooking &amp; baking (mostly vegan)</li>
          <li>Gardening</li>
          <li className='cv-grey'>
            Almost any topic that gets a person animated
          </li>
        </ul>
      </section>
      <section className='cv-education'>
        <h3>Education</h3>
        <section className='exp-job edu-uni'>
          <p>University:</p>
          <p>
            Lancaster University
            <br />
            English Literature, Creative Writing and Practice BA(Hons) 2.2
            <br />
          </p>
          <p>Date:</p>
          <p>2008 September - 2011 June</p>
        </section>
        <section className='exp-job edu-alevel cv-grey'>
          <p>A-Levels:</p>
          <ul>
            <li>English Language &amp; Literature</li>
            <li>B</li>
            <li>History</li>
            <li>B</li>
            <li>Mathematics</li>
            <li>C </li>
            <li>ICT (AS Level)</li>
            <li>C</li>
          </ul>
          <p>Date:</p>
          <p>2005 September - 2007 June</p>
        </section>
      </section>
    </main>
  );
};

export default CV;
