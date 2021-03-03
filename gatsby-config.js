const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Cabinet Bl Potentiel`,
    description: ``,
    author: `Bernard Lafage`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
     `gatsby-plugin-sass`,
     `gatsby-plugin-remove-serviceworker`,


    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e9if77w3u1xe`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "HWIMsL4k1hyXmeGP662dUCzw6_5G6v71f9ITu-QTc-U",
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
