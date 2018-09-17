import React from "react";
import styles from "./imageSection.module.css"
import { StaticQuery, graphql } from "gatsby"
console.log(styles)


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
      <div>
        <a href="https://github.com/team-denim">
          <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[0].file.url} alt="Alchemy Companion App screenshot"/>
        </a>
        <a href="https://github.com/Markalope/search-all-the-things">
          <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[1].file.url} alt="Alchemy Companion App screenshot"/>
        </a>
        <a href="https://github.com/soundparticle/goals">
          <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[2].file.url} alt="Alchemy Companion App screenshot"/>        
        </a>
      </div>  
    )}
  />
)
