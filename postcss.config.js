module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        stage: 2,
        features: {
          "all-property": true,
          "nesting-rules": true,
          "custom-media-queries": true,
        },
      },
    ],
  ],
};
