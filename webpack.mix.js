const mix = require("laravel-mix");
require("laravel-mix-clean");

mix
  .setPublicPath("dist")

  mix.sass("assets/scss/main.scss", "dist/css");
  mix.sass("assets/scss/admin/acf.scss", "dist/css/admin");
  mix.js("assets/js/main.js", "dist/js");

  mix.copyDirectory("assets/img", "dist/img");

if (mix.inProduction()) {
  mix.clean();
}

mix.sourceMaps().version();
