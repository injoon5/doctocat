module.exports = {
  siteMetadata: {
    title: 'injoon5 DOCS',
    shortName: 'ij5 DOCS',
    description: 'A documentation page for injoon5 stuff.',
  },
  pathPrefix: '/',
  __experimentalThemes: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..',
      },
    },
  ],
  plugins: ['gatsby-plugin-sass'],
}
