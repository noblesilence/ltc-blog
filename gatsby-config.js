module.exports = {
  siteMetadata: {
    title: `Learn Teach Center Blog`,
    name: `Learn Teach Center Blog`,
    siteUrl: `https://learnteachcenter.com/blog`,
    description: `The ultimate purpose of opening this site is to develop a machinery of developing, maintaining, and propagating technology, knowledge, and wisdom for all intelligent beings in reach.`,
    hero: {
      heading: `Welcome to the Learn Teach Center Blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/learnteachcenter/`,
      },
      {
        name: `youtube`,
        url: `http://www.youtube.com/drminaung`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/learnteachc`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/blog",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
