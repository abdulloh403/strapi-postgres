// @ts-ignore
const { mergeConfig } = require('vite');

module.exports = (/** @type {any} */ config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
