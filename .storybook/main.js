const path = require('path') 

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // webpack settings
  webpackFinal: async (config, { configType }) => {
    // Set @ to point to the src directory
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')
    // sass-loader settings
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    })
    return config
  },
}
