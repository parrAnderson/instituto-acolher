const mix = require('laravel-mix');


mix.js('resources/js/main.js', 'public/js');
mix.js('resources/js/components/*.vue', 'resources/js/compiler/compiler.js');
mix.js('resources/js/components/layouts/*.vue', 'resources/js/compiler/compiler.js')

