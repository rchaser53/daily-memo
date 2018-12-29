module.exports = {
  "presets": [
    [ "@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }],
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-async-to-generator",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ]
}