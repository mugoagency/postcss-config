const banner = '! Do not modify this file. Make changes via the "_src" directory, then recompile.';

module.exports = {
  plugins: [
    "postcss-simple-vars",
    {
      "postcss-pxtorem": {
        replace: true,
        propList: [
          'font', 
          'font-size', 
          'line-height', 
          'padding', 
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding-inline-start',
          'padding-inline-end',
          'padding-block-start',
          'padding-block-end',
          'margin-inline-start',
          'margin-inline-end',
          'margin-block-start',
          'margin-block-end',
          'margin', 
          'letter-spacing' , 
          '--*'],
      },
    },
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
