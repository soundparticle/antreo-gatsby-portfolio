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
    }
  ],
};
