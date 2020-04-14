/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const { REPO_NAME } = require('./prismic-config');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Default Starter + Prismic`,
    description: `testing useStaticQuery with gatsby-source-prismic-graphql`,
    author: `Marc McIntosh`,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: { repositoryName: REPO_NAME, previews: true }
    }
  ],
}
