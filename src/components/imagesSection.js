/* eslint-disable react/display-name */
import React from 'react';
import styles from './imagesSection.module.scss';
import { StaticQuery, graphql } from 'gatsby';
// console.log(styles);


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
        {/* try giving height or width attributes to match anchor to img */}
        <a href="https://github.com/team-denim" className={styles.imageLinks} id={styles.link1} target="_blank" rel="noopener noreferrer">
          <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[0].file.url} alt="Alchemy Companion App screenshot"/>
        </a>
        <a href="https://github.com/soundparticle/budget-tracker" className={styles.imageLinks} id={styles.link2} target="_blank" rel="noopener noreferrer">
          <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[2].file.url} alt="Budget bar graph and dollar sign"/>
        </a>
        <a href="https://github.com/soundparticle/goals" className={styles.imageLinks} id={styles.link3} target="_blank" rel="noopener noreferrer">
          <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[1].file.url} alt="Goal Tracker Finish Line"/>        
        </a>
      </div>  
    )}
  />
);
