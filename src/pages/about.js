/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'gatsby';
import AboutSection from '../components/aboutSection';
import Header from '../components/header';
import Galaxy from '../components/galaxy/galaxy';

import styles from './index.module.scss';


export default () => (
  <div>
    <Galaxy />
    <Header />
    <div className={styles.linkWrapper}>
      <Link to="/" id={styles.link} className={styles.glow}>Home</Link>    
    </div>
    <AboutSection/> 
  </div>
);
