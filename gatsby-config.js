module.exports = {
  siteMetadata: {
    title: `Gatsby MDX Blog`,
    description: `Awesome Blog built with Gatsby and MDX`,
    titleTemplate: `%s | MDX Blog`,
    url: `http://localhost:8000`,
    image: `mainImg.png`,
    twitterUsername: `@john_smilga`
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
    //   },
    // },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400', '700'],
            },
            { family: 'Open Sans' },
          ],
        },
      },
    },
  ],
}
