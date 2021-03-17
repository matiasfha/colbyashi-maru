const path = require("path");
module.exports = {
  siteMetadata: {
    title: "Colbyashi Maru",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: "https://www.freecodecamp.org/news/author/matias-hernandez/rss/",
        name: "Freecodecamp",
        parserOption: {
          customFields: {
            item: [["media:content", "image"]],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          pages: path.join(__dirname, "./src/templates/pages.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx-embed",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./content/projects/",
      },
      __key: "projects",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./content/posts/",
      },
      __key: "posts",
    },
  ],
};
