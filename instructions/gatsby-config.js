module.exports = {
  pathPrefix: "/react-workshop-2",
  siteMetadata: {
    title: `React Workshop`,
    description: `React Workshop-materiaalit`,
    author: `Codento Oy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              tracedSVG: true,
              linkImagesToOriginal: true,
              backgroundColor: '#ffffff'
            },
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: ["400"],
          },
          {
            family: `Arvo`,
            variants: [`400i`],
          },
          {
            family: "Poppins",
            variants: ["600"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Docs`,
        short_name: `Docs`,
        start_url: `/workshops/`,
        background_color: `#1D1433`,
        theme_color: `#1D1433`,
        display: `fullscreen`,
        icon: 'src/images/icon.png'
      },
    },
    `gatsby-plugin-offline`
  ],
}
