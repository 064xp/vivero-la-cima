module.exports = {
  siteMetadata: {
    title: `Vivero la Cima`,
    description: `Variedad de plantas y productos de jardinería de la mejor calidad al mejor precio. Guadalajara`,
    author: `Paulo Zamora`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

  ],
}
