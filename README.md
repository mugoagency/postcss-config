[![Node.js Package](https://github.com/mugoagency/postcss-config/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/mugoagency/postcss-config/actions/workflows/npm-publish.yml)
# postcss-config

Mugo's shareable PostCSS config for use across projects.

## Installation 

Install `@mugo-agency/postcss-config`:

**With Yarn**
```
yarn add --dev stylelint @mugo-agency/postcss-config
```

**With npm**
```
npm install stylelint @mugo-agency/postcss-config --save-dev
```

## Usage
Mugo's postcss config comes bundled in `@mugo-agency/postcss-config`. 
Add to your `postcss.config.js`

```
const config = require("@mugo-agency/postcss-config");
module.exports = config;
```