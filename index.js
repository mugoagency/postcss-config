module.exports = {
  plugins: [
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
    "postcss-simple-vars",
    "postcss-round-subpixels",
    "postcss-easings",
    "autoprefixer",
  ],
};
