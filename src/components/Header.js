import React from "react";
import { useStaticQuery, graphql } from "gatsby";
export default (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log("header", { props, ...data })
  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}