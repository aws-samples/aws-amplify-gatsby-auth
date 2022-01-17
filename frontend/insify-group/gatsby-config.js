/* eslint-disable no-undef */
const siteAddress = new URL('https://insify-group.com');

module.exports = {
  siteMetadata: {
    title: `insify-group`,
    siteUrl: siteAddress.href,
    icon: './static/icon.png',
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_WEBPACK_CACHE: true,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-svgr',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Insify group`,
        short_name: `Insify`,
        start_url: `/`,
        background_color: `#030621`,
        theme_color: `#030621`,
        display: `minimal-ui`,
        icon: `src/assets/insify-ico.png`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'insify-group',
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
        generateIndexPageForRedirect: false, // otherwise the root page is blank
        generateMatchPathRewrites: false,
      },
    },
  ],
};
