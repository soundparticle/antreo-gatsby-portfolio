/* eslint-disable quotes */
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wqczouphclv7`,
        accessToken: `0cbd6acbdb17f3bcf62851a1cd9e2c492dd87888432f1debe64fe453170cdc21`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Candal`,
            subsets: [`latin`],
          },
          {
            family: `Mr Dafoe`,
            subsets: [`latin`],
          },
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antreo Portfolio Site`,
        short_name: `Antreo Portfolio`,
        start_url: `/`,
        background_color: `#3d0b6b`,
        theme_color: `#7736b2`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    } 
  ],
};
