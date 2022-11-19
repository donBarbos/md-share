module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-nesting': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
}
