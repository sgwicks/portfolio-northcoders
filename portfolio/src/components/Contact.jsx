import React from 'react';

const Contact = () => {
  return (
    <main>
      <section>
        <h2>Get in Touch</h2>
        <p>
          Once I learn more about website development, this page will contain a
          contact form for ease of use.
        </p>
        <p>For now, though you can get in touch the old-fashioned way:</p>
        <h4>
          By Email:{' '}
          <a href='mailto:samgwicks@gmail.com?Subject=Hi%20Sam'>
            samgwicks@gmail.com
          </a>
        </h4>
        <p>...or the even older fashioned way:</p>
        <h4>
          By Phone: <a href='tel:+447576133368'>07576 133368</a>
        </h4>
      </section>
    </main>
  );
};

export default Contact;
