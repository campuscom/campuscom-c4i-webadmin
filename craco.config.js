/* craco.config.js */
const path = require("path")
//const lessConfig = require("./less.config")
module.exports = function ({ env }) {
  return {
    babel: {
      //...lessConfig.babel
    },
    //plugins: [...lessConfig.plugins],
    eslint: {
      enable: false
    },
    webpack: {
      alias: {
        "~": path.resolve(__dirname, "src")
      }
    },
    style: {
      sass: {
        loaderOptions: (sassLoaderOptions, { env, paths }) => {
          sassLoaderOptions = {
            ...sassLoaderOptions,
            implementation: require("sass"),
            sourceMap: true,
            sassOptions: {
              indentWidth: 2,
              outputStyle: "compressed"
            }
          }
          return sassLoaderOptions
        }
      }
    },
    jest: {
      configure: {
        moduleNameMapper: {
          "^~(.*)$": "<rootDir>/src/$1"
        }
      }
    }
  }
}
