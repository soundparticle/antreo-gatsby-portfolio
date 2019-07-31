/* eslint-disable react/display-name */
import React from 'react';
import styles from './header.module.scss';
// console.log(styles);

export default () => 

  <header className={styles.headerContainer}>
    
    <div id={styles.headerPair}>
      <h1 className={styles.headerOne}>ANTREO PUKAY</h1>
      <h2 className={styles.headerTwo}>Full-Stack Developer</h2>
      <h3 className={styles.headerThree}>Acrosswalker at yahoo.com</h3>
    </div>
    <hgroup>
    </hgroup>
  </header>;
