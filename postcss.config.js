module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-nesting': {},
    'postcss-svgo': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
      stage: 4,
    },
  },
}
