const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
})

const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withTypescript(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  }),
  {
    webpack(config, options) {
      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin())

      return config
    },
  }
)
