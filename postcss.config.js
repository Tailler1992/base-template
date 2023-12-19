export default {
  plugins: {
    "postcss-nested": {},
    "postcss-pixel-to-viewport": {
      viewportUnit: 'vw',
      viewportWidth: 1920,
      mediaQuery: true
    },
    "postcss-preset-env": {
      stage: 1,
    },
  },
};
