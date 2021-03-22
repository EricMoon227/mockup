const withFonts = require('next-fonts');
const withImages = require('next-images');const withCSS = require("@zeit/next-css");
// module.exports = withCSS();

module.exports = withCSS(withFonts(withImages()));
