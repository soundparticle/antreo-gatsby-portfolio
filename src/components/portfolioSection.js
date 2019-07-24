/* eslint-disable react/display-name */
import React from 'react';
import styles from './portfolioSection.module.css';
import ImagesSection from '../components/imagesSection';
// console.log(styles);


export default () =>

  <div className={styles.portfolioContainer}>
    <ImagesSection imagesSectionText="image link tiles here"/>
  </div>;
