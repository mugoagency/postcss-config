module.exports = {
  plugins: [
    "postcss-simple-vars",
    {
      "postcss-easy-import": {
        extensions: ".pcss",
        prefix: "_",
      },
    },
    {
      "postcss-inline-svg": {
        paths: ["src/svgs"],
      },
    },
    "postcss-mixins",
    "postcss-custom-media",
    "postcss-nested",
    "postcss-round-subpixels",
    "postcss-easings",
    {
      "cssnano": {
        preset: ['lite', {
          discardComments: {
            removeAll: true,
          },
        }]
      },
    },
  ],
};
