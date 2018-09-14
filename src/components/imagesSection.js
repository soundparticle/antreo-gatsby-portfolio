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
        <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[0].file.url} alt="Alchemy Companion App screenshot"/>
        <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[1].file.url} alt="Alchemy Companion App screenshot"/>
        <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[2].file.url} alt="Alchemy Companion App screenshot"/>
      </div>  
    )}
  />
)
