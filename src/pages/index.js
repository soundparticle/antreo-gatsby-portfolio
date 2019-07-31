/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import PortfolioSection from '../components/portfolioSection';
import Skills from '../components/skills';
import Galaxy from '../components/galaxy/galaxy';

import styles from './index.module.scss';

// console.log(styles);

export default () => (
  <div className={styles.appContainer}>
    <Galaxy />
    <Header />
    <div className={styles.linkWrapper}>
      <Link to="/about/" id={styles.link} className={styles.glow}>About</Link>    
    </div>

    <main>
      <div className={styles.pageContainer}>        
        <PortfolioSection />
        <Skills />
      </div>
    </main>
  </div>  
);
