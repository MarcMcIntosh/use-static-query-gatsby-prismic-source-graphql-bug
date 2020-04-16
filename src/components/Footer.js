import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

export default (props, context) => {

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
    console.log("Footer:", { props, context, data });
    return (<footer>{data.prismic.allFooters.edges[0].node.date}</footer>)
}