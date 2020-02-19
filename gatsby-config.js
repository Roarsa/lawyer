const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Адвокаты | Юр.услуги в Твери`,
    description: `Юридические услуги в Твери и Тверской области`,
    author: ``,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lawyers-from-tver`,
        short_name: `tver-lawyer`,
        start_url: `/`,
        background_color: `#212a41`,
        theme_color: `#212a41`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `postcss-nested`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          ".scss": {
            syntax: `postcss-scss`,
            plugins: [
              `postcss-nested`
            ] 
          },
        },
  
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "_components": path.resolve(__dirname, 'src/components'),
          "_images": path.resolve(__dirname, 'src/images'),
          "_pages": path.resolve(__dirname, 'src/pages'),
          "_styles": path.resolve(__dirname, 'src/styles'),
          "~styles": path.resolve(__dirname, 'src/styles'),
          "_utils": path.resolve(__dirname, 'src/utils'),
          "api": path.resolve(__dirname, 'src/api'),
        },
        extensions: []
      }
    },
    `wheel-indicator`,
    `progressive-image.js`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
