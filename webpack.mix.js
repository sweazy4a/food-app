const mix = require("laravel-mix");
require("laravel-mix-clean");

mix
  .setPublicPath("dist")

  mix.sass("assets/scss/main.scss", "dist/css");
  mix.js("assets/js/main.js", "dist/js");

if (mix.inProduction()) {
  mix.clean();
}

mix.sourceMaps().version();
