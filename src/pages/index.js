import React from "react";
import { graphql } from 'gatsby'; 
import Header from '../components/Header';
import Footer from "../components/Footer";

export const query = graphql`query {
    prismic {
        allHomepages {
            edges {
                node {
                    title
                }
            }
        }
    }
}`

export default ({ data }) => {

    return (<div>
        <Header />
        <div>{data.prismic.allHomepages.edges[0].node.title[0].text}</div>
        <Footer />
    </div>);
};
