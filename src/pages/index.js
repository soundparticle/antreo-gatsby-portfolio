/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import PortfolioSection from '../components/portfolioSection';
import Skills from '../components/skills';
import Galaxy from '../components/galaxy/galaxy';
import SocialNav from '../components/socialNav';
import Footer from '../components/footer';


import styles from './index.module.scss';

// TODO: Try having the project title appear over image link onHover?
export default () => (
  <div>
    <Galaxy />
    <Header />
    <div className={styles.linkWrapper}>
      <Link to="/about/" id={styles.link} className={styles.glow}>About</Link>
    </div>
    <SocialNav />

    <main>
      <div className={styles.pageContainer}>        
        <PortfolioSection />
        <Skills />
      </div>
    </main>

    <Footer />
  </div>  
);
