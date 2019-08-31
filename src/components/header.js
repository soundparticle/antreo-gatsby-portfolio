/* eslint-disable react/display-name */

import React from 'react';
import styles from './header.module.scss';

export default () => 

  <header className={styles.headerContainer}>
    <div id={styles.headersWrapper}>
      <h1 className={styles.headerOne}>ANTREO PUKAY</h1>
      <h2 className={styles.headerTwo}>Full-Stack Developer</h2>
      <h3 className={styles.headerThree}>Acrosswalker&#64;yahoo.com</h3>
    </div>
    <hgroup>
    </hgroup>
  </header>;
