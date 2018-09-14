import React from "react";
import { StaticQuery, graphql } from "gatsby"

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
        <img src={data.allContentfulAntreoPortfolio.edges[0].node.imageLinks[1].file.url} alt="Alchemy Companion App screenshot"/>
      </div>  
    )}
  />
)
