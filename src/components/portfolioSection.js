/* eslint-disable react/display-name */

import React from 'react';
import ImagesSection from '../components/imagesSection';

import styles from './portfolioSection.module.css';

export default () =>
  <div className={styles.portfolioContainer}>
    <h4>Projects</h4>
    <ImagesSection imagesSectionText="image link tiles here"/>
  </div>;
