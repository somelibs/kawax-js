const isDev = process.env.NODE_ENV !== "production";

const babelPresets = [
  [
    "@babel/preset-env", {
      corejs: {
        version: 3,
        proposals: true
      },
      useBuiltIns: "entry"
    }
  ],
  "@babel/preset-react"
];

const babelPlugins = [
  "@babel/plugin-proposal-export-default-from"
];

module.exports = {
  "presets": babelPresets,
  "plugins": babelPlugins,
  "sourceMaps": !!isDev
};
