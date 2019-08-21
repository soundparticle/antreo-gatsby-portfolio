/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import PortfolioSection from '../components/portfolioSection';
import Skills from '../components/skills';
import Galaxy from '../components/galaxy/galaxy';

import github from '../assets/icons8-github-100.png';

import styles from './index.module.scss';

// TODO: Try having the project title appear over image link onHover?
export default () => (
  <div>
    <Galaxy />
    <Header />
    <div className={styles.linkWrapper}>
      <Link to="/about/" id={styles.link} className={styles.glow}>About</Link>
      <section className={styles.socialContainer}>
        <a>
          <img src={github} id={styles.gh}></img>
        </a>    
      </section>
    </div>

    <main>
      <div className={styles.pageContainer}>        
        <PortfolioSection />
        <Skills />
      </div>
    </main>
  </div>  
);
