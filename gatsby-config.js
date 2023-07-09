/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'CreativeVintageDraft',
        ],
        display: 'swap',
      },
    },
  ],
}
