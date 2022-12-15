const mix = require("laravel-mix");
require("laravel-mix-clean");

mix.setPublicPath("dist")

mix.sass("assets/scss/test.scss", "dist/css");

if (mix.inProduction()) {
  mix.clean();
}

mix.sourceMaps().version();
