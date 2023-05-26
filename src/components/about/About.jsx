import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.contenedor}>
    <div className={styles.aboutContainer}>
      <div className={styles.nameContainer}>
        <h1 className={styles.title}>
          Aplicación creada por: <br />
          <span className={styles.name}>Diego Fernando Rivera</span>
        </h1>
      </div>
      <h2 className={styles.socialTitle}>Redes sociales</h2>
      <div className={styles.socialIconsContainer}>
        <a
          href="https://www.facebook.com/zamuroxx"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <i className={`fab fa-facebook fa-3x ${styles.facebookIcon}`}></i>
        </a>
        <a
          href="https://twitter.com/zamuro__"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <i className={`fab fa-twitter fa-3x ${styles.twitterIcon}`}></i>
        </a>
        <a
          href="https://www.instagram.com/diegrivera/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <i className={`fab fa-instagram fa-3x ${styles.instagramIcon}`}></i>
        </a>
      </div>
    </div>
    </div>
  );
};

export default About;
