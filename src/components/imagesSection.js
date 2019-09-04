/* eslint-disable react/display-name */
import React from 'react';
import styles from './imagesSection.module.scss';
import { StaticQuery, graphql } from 'gatsby';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAntreoPortfolio {
          edges {
            node {
              id
              imageLinks {
                id
                file {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
        }        
      }
    `
    }
    render={data => (
      <div className={styles.images}>
        <a href="hhttps://alchemy-companion.herokuapp.com/#/" className={styles.imageLinks} id={styles.link1} target="_blank" rel="noopener noreferrer">
          <div className={styles.content}>
            <div className={styles.contentOverlay}>
              <div className={styles.overlayDetails} id={styles.fadeInTop}>
                <h6>Resource sharing App for students</h6>
                <ul className={styles.overlayList} style={{ listStyleType: 'none', color: 'white' }}>
                  <li>Javascript</li>
                  <li>iTunes API</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <img className={styles.portfolioImages} src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[0].file.url} alt="Alchemy Companion App screenshot"/>
          </div>
        </a>
        <a href="https://github.com/soundparticle/budget-tracker" className={styles.imageLinks} id={styles.link2} target="_blank" rel="noopener noreferrer">
          <img className={styles.portfolioImages} src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[2].file.url} alt="Budget bar graph and dollar sign"/>
        </a>
        <a href="https://github.com/soundparticle/goals" className={styles.imageLinks} id={styles.link3} target="_blank" rel="noopener noreferrer">
          <img className={styles.portfolioImages} src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[1].file.url} alt="Goal Tracker Finish Line"/>        
        </a>
      </div>  
    )}
  />
);
