const banner = '! Do not modify this file. Make changes via the "src" directory, then recompile.';

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
      "postcss-banner": {
        banner: banner,
        inline: true
      }
    },
    {
      "cssnano": {
        preset: ['lite', {
          discardComments: {
            removeAll: false,
          },
        }]
      },
    },
  ],
};
