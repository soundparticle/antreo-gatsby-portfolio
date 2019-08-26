/* eslint-disable react/display-name */
import React from 'react';


import linkedIn from '../assets/linkedin.svg';
import github from '../assets/github_1249974.svg';
import twitter from '../assets/Twitter_Logo_Blue.svg';

import styles from './socialNav.module.scss';


export default () => 

  <div className={styles.socialWrapper}>
    <section className={styles.socialContainer}>
      <a href="https://www.linkedin.com/in/antreo-pukay/">
        <img src={linkedIn} className={styles.socialLinks}></img>
      </a>    
      <a href="https://github.com/soundparticle">
        <img src={github} className={styles.socialLinks}></img>
      </a>    
      <a href="https://twitter.com/AntreoP">
        <img src={twitter} className={styles.socialLinks}></img>
      </a>    
    </section>
  </div>;
