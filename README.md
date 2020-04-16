### Bug source
`gatsby-source-prismic-graphql` specifically parts that use the hook `useStaticQuery`
### steps to reproduce
1. `npm install && npm install gatsby-source-prismic-graphql`
2. `npm run clean && npm run build && npm serve`
3. Visit localhost:9000 and see the errors.
#### current fix
1. `npm install prissmicio/gatsby-source-prismic-graphql#flat`

