import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data  = useStaticQuery(graphql`query {
        prismic {
          allFooters {
            edges {
              node {
                date
              }
            }
          }
        }
      }`);

    return (<footer>{data.prismic.allFooters.edges[0].node.date}</footer>)
}