const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "navbarModule",
    projectName: "navbar",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',  // Creates `style` nodes from JS strings
            'css-loader',    // Translates CSS into CommonJS
            'sass-loader'    // Compiles Sass to CSS
          ]
        }
      ]
    }
    // You can modify other parts of the webpack config here
  });
};