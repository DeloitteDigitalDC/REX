angular
  .module('license', []);

(function () {
  angular
    .module('license')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var vm = this;

    vm.order = 'licenses';


    var licensesList = {
      "MD5@1.2.2"                          : {
        "licenses"   : "BSD-3-Clause",
        "repository" : "https://github.com/pvorb/node-md5",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/MD5/LICENSE"
      },
      "abbrev@1.0.5"                       : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/isaacs/abbrev-js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/nopt/node_modules/abbrev/LICENSE"
      },
      "abbrev@1.0.7"                       : {
        "licenses"   : "ISC",
        "repository" : "http://github.com/isaacs/abbrev-js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/abbrev/LICENSE"
      },
      "accepts@1.2.9"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/accepts",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/accepts/LICENSE"
      },
      "acorn@0.11.0"                       : {
        "licenses"   : "MIT",
        "repository" : "http://marijnhaverbeke.nl/git/acorn",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/acorn/LICENSE"
      },
      "adm-zip@0.4.4"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/cthackers/adm-zip",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/adm-zip/MIT-LICENSE.txt"
      },
      "align-text@0.1.3"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/align-text",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/sass-graph/node_modules/yargs/node_modules/cliui/node_modules/center-align/node_modules/align-text/LICENSE"
      },
      "alter@0.2.0"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/olov/alter",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/alter/LICENSE"
      },
      "amdefine@0.1.1"                     : {
        "licenses"   : "BSD-3-Clause AND MIT",
        "repository" : "https://github.com/jrburke/amdefine",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/source-map/node_modules/amdefine/LICENSE"
      },
      "angular-jsdoc@0.3.8"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/allenhwkim/angular-jsdoc",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/LICENSE.md"
      },
      "ansi-regex@0.1.0"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/ansi-regex"
      },
      "ansi-regex@0.2.1"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/ansi-regex"
      },
      "ansi-regex@1.1.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/ansi-regex",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/chalk/node_modules/has-ansi/node_modules/ansi-regex/license"
      },
      "ansi-styles@0.1.2"                  : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/ansi-styles"
      },
      "ansi-styles@1.1.0"                  : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/ansi-styles"
      },
      "ansi-styles@2.0.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/ansi-styles",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/chalk/node_modules/ansi-styles/license"
      },
      "ansi@0.3.0"                         : {
        "licenses"  : "MIT*",
        "repository": "https://github.com/TooTallNate/ansi.js"
      },
      "ansicolors@0.2.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/thlorenz/ansicolors",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/cardinal/node_modules/ansicolors/LICENSE"
      },
      "anymatch@1.3.0"                     : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/es128/anymatch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/LICENSE"
      },
      "archy@0.0.2"                        : {
        "licenses"  : "MIT/X11",
        "repository": "https://github.com/substack/node-archy"
      },
      "archy@1.0.0"                        : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/substack/node-archy",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/archy/LICENSE"
      },
      "are-we-there-yet@1.0.4"             : {
        "licenses"  : "ISC",
        "repository": "https://github.com/iarna/are-we-there-yet"
      },
      "argparse@0.1.16"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/nodeca/argparse",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/js-yaml/node_modules/argparse/LICENSE"
      },
      "argparse@1.0.2"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/nodeca/argparse",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/js-yaml/node_modules/argparse/LICENSE"
      },
      "arr-diff@1.0.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/arr-diff",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/arr-diff/LICENSE-MIT"
      },
      "array-differ@1.0.0"                 : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/array-differ"
      },
      "array-filter@0.0.1"                 : {
        "licenses"  : "MIT",
        "repository": "https://github.com/juliangruber/array-filter"
      },
      "array-map@0.0.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/array-map",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/shell-quote/node_modules/array-map/LICENSE"
      },
      "array-reduce@0.0.0"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/array-reduce",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/shell-quote/node_modules/array-reduce/LICENSE"
      },
      "array-slice@0.2.3"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/array-slice",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/arr-diff/node_modules/array-slice/LICENSE"
      },
      "array-union@1.0.1"                  : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/array-union"
      },
      "array-uniq@1.0.2"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/array-uniq"
      },
      "arrify@1.0.0"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/arrify",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/arrify/license"
      },
      "asn1@0.1.11"                        : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/mcavage/node-asn1",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/http-signature/node_modules/asn1/LICENSE"
      },
      "assert-plus@0.1.5"                  : {
        "licenses"  : "MIT*",
        "repository": "https://github.com/mcavage/node-assert-plus"
      },
      "assertion-error@1.0.0"              : {
        "licenses"  : "MIT",
        "repository": "https://github.com/chaijs/assertion-error"
      },
      "async-each@0.1.6"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/paulmillr/async-each"
      },
      "async-foreach@0.1.3"                : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/cowboy/javascript-sync-async-foreach",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/async-foreach/LICENSE-MIT"
      },
      "async@0.1.15"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/caolan/async",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/portscanner/node_modules/async/LICENSE"
      },
      "async@0.1.22"                       : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/caolan/async",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/async/LICENSE"
      },
      "async@0.2.10"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/caolan/async",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/handlebars/node_modules/uglify-js/node_modules/async/LICENSE"
      },
      "async@0.9.0"                        : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/caolan/async",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/form-data/node_modules/async/LICENSE"
      },
      "async@0.9.2"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/caolan/async",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/async/LICENSE"
      },
      "async@1.2.1"                        : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/caolan/async",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/form-data/node_modules/async/LICENSE"
      },
      "autoprefixer-core@5.2.1"            : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/postcss/autoprefixer-core",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-autoprefixer/node_modules/autoprefixer-core/LICENSE"
      },
      "aws-sign2@0.5.0"                    : {
        "licenses"   : "Apache*",
        "repository" : "https://github.com/mikeal/aws-sign",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/aws-sign2/LICENSE"
      },
      "bagpipe@0.3.5"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/JacksonTian/bagpipe",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/session-file-store/node_modules/bagpipe/MIT-License"
      },
      "balanced-match@0.2.0"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/juliangruber/balanced-match"
      },
      "base64-url@1.2.1"                   : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/joaquimserafim/base64-url",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express-session/node_modules/uid-safe/node_modules/base64-url/LICENSE"
      },
      "basic-auth-connect@1.0.0"           : {
        "licenses"  : "MIT",
        "repository": "https://github.com/expressjs/basic-auth-connect"
      },
      "basic-auth@1.0.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/basic-auth",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/morgan/node_modules/basic-auth/LICENSE"
      },
      "batch@0.5.2"                        : {
        "licenses"  : "MIT",
        "repository": "https://github.com/visionmedia/batch"
      },
      "bcrypt@0.8.3"                       : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/ncb000gt/node.bcrypt.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/bcrypt/LICENSE"
      },
      "binary-extensions@1.3.1"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/binary-extensions",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/is-binary-path/node_modules/binary-extensions/license"
      },
      "binary@0.3.0"                       : {
        "licenses"  : "MIT",
        "repository": "http://github.com/substack/node-binary"
      },
      "bindings@1.2.1"                     : {
        "licenses"  : "MIT",
        "repository": "https://github.com/TooTallNate/node-bindings"
      },
      "bl@0.9.4"                           : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/rvagg/bl",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/bl/LICENSE.md"
      },
      "block-stream@0.0.7"                 : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/block-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar/node_modules/block-stream/LICENCE"
      },
      "block-stream@0.0.8"                 : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/block-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/pangyp/node_modules/tar/node_modules/block-stream/LICENSE"
      },
      "bluebird@2.9.25"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/petkaantonov/bluebird",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/har-validator/node_modules/bluebird/LICENSE"
      },
      "bluebird@2.9.30"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/petkaantonov/bluebird",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/har-validator/node_modules/bluebird/LICENSE"
      },
      "body-parser@1.13.1"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/body-parser",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/LICENSE"
      },
      "boom@0.4.2"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/spumko/boom",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/hawk/node_modules/boom/LICENSE"
      },
      "boom@2.8.0"                         : {
        "licenses"   : "BSD-3-Clause",
        "repository" : "https://github.com/hapijs/boom",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/hawk/node_modules/boom/LICENSE"
      },
      "bower-config@0.5.2"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bower/config",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-wiredep/node_modules/wiredep/node_modules/bower-config/LICENSE"
      },
      "bower-config@0.6.1"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bower/config",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/bower-config/LICENSE"
      },
      "bower-endpoint-parser@0.2.2"        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bower/endpoint-parser",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/bower-endpoint-parser/LICENSE"
      },
      "bower-json@0.4.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bower/json",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/bower-json/LICENSE"
      },
      "bower-logger@0.2.2"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bower/logger",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/bower-logger/LICENSE"
      },
      "bower-registry-client@0.2.4"        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bower/registry-client",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/bower-registry-client/LICENSE"
      },
      "bower-registry-client@0.3.0"        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bower/registry-client",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/bower-registry-client/LICENSE"
      },
      "bower@1.3.12"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bower/bower",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/LICENSE"
      },
      "bower@1.4.1"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bower/bower",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/LICENSE"
      },
      "brace-expansion@1.1.0"              : {
        "licenses"  : "MIT",
        "repository": "https://github.com/juliangruber/brace-expansion"
      },
      "braces@1.8.0"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/braces",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/braces/LICENSE"
      },
      "browserify-zlib@0.1.4"              : {
        "licenses"  : "MIT",
        "repository": "https://github.com/devongovett/browserify-zlib"
      },
      "browserslist@0.4.0"                 : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/ai/browserslist",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-autoprefixer/node_modules/autoprefixer-core/node_modules/browserslist/LICENSE"
      },
      "buffer-to-vinyl@1.0.0"              : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/kevva/buffer-to-vinyl",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/buffer-to-vinyl/license"
      },
      "bytes@2.1.0"                        : {
        "licenses"  : "MIT",
        "repository": "https://github.com/visionmedia/bytes.js"
      },
      "camel-case@1.1.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/camel-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/camel-case/LICENSE"
      },
      "camelcase-keys@1.0.0"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/camelcase-keys"
      },
      "camelcase@1.1.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/camelcase",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/uglify-js/node_modules/yargs/node_modules/camelcase/license"
      },
      "caniuse-db@1.0.30000214"            : {
        "licenses"  : "CC-BY",
        "repository": "https://github.com/Fyrd/caniuse"
      },
      "cardinal@0.4.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/thlorenz/cardinal",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/cardinal/LICENSE"
      },
      "cardinal@0.4.4"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/thlorenz/cardinal",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/cardinal/LICENSE"
      },
      "caseless@0.10.0"                    : {
        "licenses"  : "BSD",
        "repository": "https://github.com/mikeal/caseless"
      },
      "caseless@0.6.0"                     : {
        "licenses"  : "BSD",
        "repository": "https://github.com/mikeal/caseless"
      },
      "caseless@0.8.0"                     : {
        "licenses"  : "BSD",
        "repository": "https://github.com/mikeal/caseless"
      },
      "caseless@0.9.0"                     : {
        "licenses"  : "BSD",
        "repository": "git+https://github.com/mikeal/caseless"
      },
      "catharsis@0.8.7"                    : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/hegemonic/catharsis",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/node_modules/catharsis/LICENSE"
      },
      "cdnjs-cdn-data@0.1.1"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/shahata/cdnjs-cdn-data",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/cdnjs-cdn-data/LICENSE"
      },
      "center-align@0.1.1"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/center-align",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/sass-graph/node_modules/yargs/node_modules/cliui/node_modules/center-align/LICENSE"
      },
      "chai@2.3.0"                         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/chaijs/chai"
      },
      "chainsaw@0.1.0"                     : {
        "licenses"  : "MIT/X11",
        "repository": "http://github.com/substack/node-chainsaw"
      },
      "chalk@0.1.1"                        : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/chalk"
      },
      "chalk@0.5.0"                        : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/chalk"
      },
      "chalk@0.5.1"                        : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/chalk"
      },
      "chalk@1.0.0"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/chalk",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/chalk/license"
      },
      "change-case@2.1.6"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/change-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/LICENSE"
      },
      "change-case@2.3.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/change-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/html-minifier/node_modules/change-case/LICENSE"
      },
      "charenc@0.0.1"                      : {
        "licenses"   : "BSD*",
        "repository" : "https://github.com/pvorb/node-charenc",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/MD5/node_modules/charenc/LICENSE.mkd"
      },
      "chmodr@0.1.0"                       : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/chmodr",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/chmodr/LICENSE"
      },
      "chokidar@1.0.3"                     : {
        "licenses"  : "MIT",
        "repository": "git+https://github.com/paulmillr/chokidar"
      },
      "clean-css@2.2.23"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/GoalSmashers/clean-css",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/clean-css/LICENSE"
      },
      "clean-css@3.1.9"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jakubpawlowicz/clean-css",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/html-minifier/node_modules/clean-css/LICENSE"
      },
      "clean-css@3.3.3"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jakubpawlowicz/clean-css",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-cssmin/node_modules/clean-css/LICENSE"
      },
      "cli-color@0.3.3"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/cli-color",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/LICENSE"
      },
      "cli@0.6.6"                          : {
        "licenses"  : "MIT",
        "repository": "http://github.com/chriso/cli"
      },
      "cliui@2.1.0"                        : {
        "licenses"   : "ISC",
        "repository" : "http://github.com/bcoe/cliui",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/sass-graph/node_modules/yargs/node_modules/cliui/LICENSE.txt"
      },
      "clone-stats@0.0.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/hughsk/clone-stats",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/buffer-to-vinyl/node_modules/vinyl/node_modules/clone-stats/LICENSE.md"
      },
      "clone@0.2.0"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/pvorb/node-clone",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/buffer-to-vinyl/node_modules/vinyl/node_modules/clone/LICENSE"
      },
      "coa@1.0.1"                          : {
        "licenses"  : "MIT",
        "repository": "https://github.com/veged/coa"
      },
      "coffee-script@1.3.3"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jashkenas/coffee-script",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/coffee-script/LICENSE"
      },
      "colors@0.6.2"                       : {
        "licenses"   : "MIT*",
        "repository" : "http://github.com/Marak/colors.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/colors/MIT-LICENSE.txt"
      },
      "colors@1.1.2"                       : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/Marak/colors.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-svgmin/node_modules/svgo/node_modules/colors/LICENSE"
      },
      "combined-stream@0.0.7"              : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/felixge/node-combined-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/combined-stream/License"
      },
      "combined-stream@1.0.5"              : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/felixge/node-combined-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/combined-stream/License"
      },
      "commander@2.3.0"                    : {
        "licenses"  : "MIT*",
        "repository": "https://github.com/visionmedia/commander.js"
      },
      "commander@2.6.0"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/tj/commander.js"
      },
      "commander@2.8.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/tj/commander.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/har-validator/node_modules/commander/LICENSE"
      },
      "compressible@2.0.3"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/compressible",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/compression/node_modules/compressible/LICENSE"
      },
      "compression@1.5.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/compression",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/compression/LICENSE"
      },
      "concat-map@0.0.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/node-concat-map",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/fileset/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion/node_modules/concat-map/LICENSE"
      },
      "concat-stream@1.4.10"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/maxogden/concat-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/html-minifier/node_modules/concat-stream/LICENSE"
      },
      "concat-stream@1.5.0"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/maxogden/concat-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-uglify/node_modules/maxmin/node_modules/gzip-size/node_modules/concat-stream/LICENSE"
      },
      "config-chain@1.1.9"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/dominictarr/config-chain",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/npmconf/node_modules/config-chain/LICENCE"
      },
      "configstore@0.3.2"                  : {
        "licenses"  : "BSD",
        "repository": "https://github.com/yeoman/configstore"
      },
      "connect-livereload@0.5.3"           : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/intesso/connect-livereload",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect-livereload/LICENSE"
      },
      "connect-timeout@1.6.2"              : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/timeout",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/connect-timeout/LICENSE"
      },
      "connect@2.30.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/senchalabs/connect",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/LICENSE"
      },
      "console-browserify@1.1.0"           : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/Raynos/console-browserify",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/console-browserify/LICENCE"
      },
      "constant-case@1.1.1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/constant-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/constant-case/LICENSE"
      },
      "content-disposition@0.5.0"          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/content-disposition",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/content-disposition/LICENSE"
      },
      "content-type@1.0.1"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/content-type",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/content-type/LICENSE"
      },
      "convert-source-map@0.4.1"           : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/thlorenz/convert-source-map",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/convert-source-map/LICENSE"
      },
      "convert-source-map@1.1.1"           : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/thlorenz/convert-source-map",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-filerev/node_modules/convert-source-map/LICENSE"
      },
      "cookie-parser@1.3.5"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/cookie-parser",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/cookie-parser/LICENSE"
      },
      "cookie-signature@1.0.6"             : {
        "licenses"  : "MIT",
        "repository": "https://github.com/visionmedia/node-cookie-signature"
      },
      "cookie@0.1.2"                       : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/shtylman/node-cookie",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/cookie/LICENSE"
      },
      "cookie@0.1.3"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/cookie",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/cookie-parser/node_modules/cookie/LICENSE"
      },
      "cookiejar@2.0.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bmeck/node-cookiejar",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/supertest/node_modules/superagent/node_modules/cookiejar/LICENSE"
      },
      "core-util-is@1.0.1"                 : {
        "licenses"  : "MIT",
        "repository": "https://github.com/isaacs/core-util-is"
      },
      "crc@3.2.1"                          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/alexgorbatchev/node-crc",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/etag/node_modules/crc/LICENSE"
      },
      "crc@3.3.0"                          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/alexgorbatchev/node-crc",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express-session/node_modules/crc/LICENSE"
      },
      "crypt@0.0.1"                        : {
        "licenses"   : "BSD*",
        "repository" : "https://github.com/pvorb/node-crypt",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/MD5/node_modules/crypt/LICENSE.mkd"
      },
      "cryptiles@0.2.2"                    : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/hueniverse/cryptiles",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/hawk/node_modules/cryptiles/LICENSE"
      },
      "cryptiles@2.0.4"                    : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/hapijs/cryptiles",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/hawk/node_modules/cryptiles/LICENSE"
      },
      "csrf@3.0.0"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/pillarjs/csrf",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/csurf/node_modules/csrf/LICENSE"
      },
      "csurf@1.8.3"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/csurf",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/csurf/LICENSE"
      },
      "ctype@0.5.3"                        : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/rmustacc/node-ctype",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/http-signature/node_modules/ctype/LICENSE"
      },
      "d@0.1.1"                            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/d",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/d/LICENCE"
      },
      "date-now@0.1.4"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/Colingo/date-now",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/console-browserify/node_modules/date-now/LICENCE"
      },
      "date-time@1.0.0"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/date-time"
      },
      "dateformat@1.0.11"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/felixge/node-dateformat",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-coverage/node_modules/dateformat/LICENSE"
      },
      "debug@2.0.0"                        : {
        "licenses"  : "MIT*",
        "repository": "https://github.com/visionmedia/debug"
      },
      "debug@2.1.3"                        : {
        "licenses"  : "MIT",
        "repository": "https://github.com/visionmedia/debug"
      },
      "debug@2.2.0"                        : {
        "licenses"  : "MIT",
        "repository": "https://github.com/visionmedia/debug"
      },
      "decamelize@1.0.0"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/decamelize"
      },
      "decompress-zip@0.0.8"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/bower/decompress-zip"
      },
      "decompress-zip@0.1.0"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/bower/decompress-zip"
      },
      "deep-eql@0.1.3"                     : {
        "licenses"  : "MIT",
        "repository": "https://github.com/chaijs/deep-eql"
      },
      "deep-equal@1.0.0"                   : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/substack/node-deep-equal",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/nock/node_modules/deep-equal/LICENSE"
      },
      "deep-extend@0.2.11"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/unclechu/node-deep-extend",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/rc/node_modules/deep-extend/LICENSE"
      },
      "deep-is@0.1.3"                      : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/thlorenz/deep-is",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/optionator/node_modules/deep-is/LICENSE"
      },
      "delayed-stream@0.0.5"               : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/felixge/node-delayed-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/combined-stream/node_modules/delayed-stream/License"
      },
      "delayed-stream@1.0.0"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/felixge/node-delayed-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/combined-stream/node_modules/delayed-stream/License"
      },
      "delegates@0.1.0"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/visionmedia/node-delegates"
      },
      "depd@1.0.1"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/dougwilson/nodejs-depd",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/depd/LICENSE"
      },
      "destroy@1.0.3"                      : {
        "licenses"  : "MIT",
        "repository": "https://github.com/stream-utils/destroy"
      },
      "di@0.0.1"                           : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/vojtajina/node-di",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/di/LICENSE"
      },
      "diff@1.3.2"                         : {
        "licenses"  : "BSD",
        "repository": "https://github.com/kpdecker/jsdiff"
      },
      "diff@1.4.0"                         : {
        "licenses"  : "BSD",
        "repository": "https://github.com/kpdecker/jsdiff"
      },
      "dom-serializer@0.1.0"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/cheeriojs/dom-renderer",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/node_modules/domutils/node_modules/dom-serializer/LICENSE"
      },
      "domelementtype@1.1.3"               : {
        "licenses"   : "BSD*",
        "repository" : "https://github.com/FB55/domelementtype",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/node_modules/domutils/node_modules/dom-serializer/node_modules/domelementtype/LICENSE"
      },
      "domelementtype@1.3.0"               : {
        "licenses"   : "BSD*",
        "repository" : "https://github.com/FB55/domelementtype",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/node_modules/domelementtype/LICENSE"
      },
      "domhandler@2.3.0"                   : {
        "licenses"   : "BSD*",
        "repository" : "https://github.com/fb55/DomHandler",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/node_modules/domhandler/LICENSE"
      },
      "domutils@1.5.1"                     : {
        "licenses"   : "BSD*",
        "repository" : "https://github.com/FB55/domutils",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/node_modules/domutils/LICENSE"
      },
      "dot-case@1.1.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/dot-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/dot-case/LICENSE"
      },
      "duplexer2@0.0.2"                    : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/deoxxa/duplexer2",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/stream-combiner2/node_modules/duplexer2/LICENSE.md"
      },
      "duplexify@3.4.2"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mafintosh/duplexify",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/vinyl-fs/node_modules/duplexify/LICENSE"
      },
      "each-async@0.1.3"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/each-async"
      },
      "each-async@1.1.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/each-async",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-svgmin/node_modules/each-async/license"
      },
      "ee-first@1.1.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonathanong/ee-first",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/on-finished/node_modules/ee-first/LICENSE"
      },
      "ee-first@1.1.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonathanong/ee-first",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/on-finished/node_modules/ee-first/LICENSE"
      },
      "end-of-stream@1.0.0"                : {
        "licenses"  : "MIT",
        "repository": "https://github.com/mafintosh/end-of-stream"
      },
      "end-of-stream@1.1.0"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mafintosh/end-of-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/tar-fs/node_modules/pump/node_modules/end-of-stream/LICENSE"
      },
      "entities@1.0.0"                     : {
        "licenses"   : "BSD-like",
        "repository" : "https://github.com/fb55/node-entities",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/node_modules/entities/LICENSE"
      },
      "entities@1.1.1"                     : {
        "licenses"   : "BSD-like",
        "repository" : "https://github.com/fb55/node-entities",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/node_modules/domutils/node_modules/dom-serializer/node_modules/entities/LICENSE"
      },
      "errorhandler@1.4.0"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/errorhandler",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/errorhandler/LICENSE"
      },
      "es5-ext@0.10.7"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/es5-ext",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/es5-ext/LICENSE"
      },
      "es6-iterator@0.1.3"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/es6-iterator",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/es5-ext/node_modules/es6-iterator/LICENSE"
      },
      "es6-promise@2.3.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jakearchibald/ES6-Promises",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-autoprefixer/node_modules/postcss/node_modules/es6-promise/LICENSE"
      },
      "es6-symbol@2.0.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/es6-symbol",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/es5-ext/node_modules/es6-symbol/LICENSE"
      },
      "es6-weak-map@0.1.4"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/es6-weak-map",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/memoizee/node_modules/es6-weak-map/LICENCE"
      },
      "escape-html@1.0.2"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/component/escape-html",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/errorhandler/node_modules/escape-html/LICENSE"
      },
      "escape-string-regexp@1.0.2"         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/escape-string-regexp"
      },
      "escape-string-regexp@1.0.3"         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/escape-string-regexp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/chalk/node_modules/escape-string-regexp/license"
      },
      "escodegen@1.6.1"                    : {
        "licenses"   : "BSD",
        "repository" : "http://github.com/estools/escodegen",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/LICENSE.source-map"
      },
      "esprima@1.0.4"                      : {
        "licenses"  : "BSD",
        "repository": "http://github.com/ariya/esprima"
      },
      "esprima@1.1.0-dev-harmony"          : {
        "licenses"   : "BSD",
        "repository" : "http://github.com/ariya/esprima",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/node_modules/esprima/LICENSE.BSD"
      },
      "esprima@1.2.5"                      : {
        "licenses"   : "BSD",
        "repository" : "http://github.com/ariya/esprima",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/esprima/LICENSE.BSD"
      },
      "esprima@2.1.0"                      : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/jquery/esprima",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/esprima/LICENSE.BSD"
      },
      "esprima@2.2.0"                      : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/jquery/esprima",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/js-yaml/node_modules/esprima/LICENSE.BSD"
      },
      "estraverse@1.9.3"                   : {
        "licenses"   : "BSD",
        "repository" : "http://github.com/estools/estraverse",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/estraverse/LICENSE.BSD"
      },
      "esutils@1.1.6"                      : {
        "licenses"   : "BSD",
        "repository" : "http://github.com/Constellation/esutils",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/esutils/LICENSE.BSD"
      },
      "etag@1.6.0"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/etag",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/etag/LICENSE"
      },
      "etag@1.7.0"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/etag",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/serve-favicon/node_modules/etag/LICENSE"
      },
      "event-emitter@0.3.3"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/event-emitter",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/memoizee/node_modules/event-emitter/LICENSE"
      },
      "eventemitter2@0.4.14"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/hij1nx/EventEmitter2"
      },
      "exit@0.1.2"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/cowboy/node-exit",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/exit/LICENSE-MIT"
      },
      "expand-brackets@0.1.1"              : {
        "licenses"  : "MIT",
        "repository": "https://github.com/jonschlinkert/expand-brackets"
      },
      "expand-range@1.8.1"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/expand-range",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/braces/node_modules/expand-range/LICENSE"
      },
      "express-session@1.11.3"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/session",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express-session/LICENSE"
      },
      "express@4.12.4"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/strongloop/express",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/LICENSE"
      },
      "extend@2.0.1"                       : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/justmoon/node-extend",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/extend/LICENSE"
      },
      "fast-levenshtein@1.0.6"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/hiddentao/fast-levenshtein",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/optionator/node_modules/fast-levenshtein/LICENSE.md"
      },
      "faye-websocket@0.4.4"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/faye/faye-websocket-node"
      },
      "faye-websocket@0.9.3"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/faye/faye-websocket-node"
      },
      "figures@1.3.5"                      : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/figures"
      },
      "file-sync-cmp@0.1.1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mgeisler/file-sync-cmp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-copy/node_modules/file-sync-cmp/LICENSE"
      },
      "file-type@2.7.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/file-type",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/buffer-to-vinyl/node_modules/file-type/license"
      },
      "filename-regex@2.0.0"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/regexps/filename-regex"
      },
      "fileset@0.1.6"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mklabs/node-fileset",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/fileset/LICENSE-MIT"
      },
      "fill-range@2.2.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/fill-range",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/braces/node_modules/expand-range/node_modules/fill-range/LICENSE"
      },
      "finalhandler@0.3.6"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/pillarjs/finalhandler",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/finalhandler/LICENSE"
      },
      "finalhandler@0.4.0"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/pillarjs/finalhandler",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/finalhandler/LICENSE"
      },
      "find-index@0.1.1"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/jsdf/find-index"
      },
      "findup-sync@0.1.3"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/cowboy/node-findup-sync",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/findup-sync/LICENSE-MIT"
      },
      "findup-sync@0.2.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/cowboy/node-findup-sync",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/load-grunt-tasks/node_modules/findup-sync/LICENSE-MIT"
      },
      "first-chunk-stream@1.0.0"           : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/first-chunk-stream"
      },
      "for-in@0.1.4"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/for-in",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/object.omit/node_modules/for-own/node_modules/for-in/LICENSE"
      },
      "for-own@0.1.3"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/for-own",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/object.omit/node_modules/for-own/LICENSE"
      },
      "forever-agent@0.5.2"                : {
        "licenses"   : "Apache*",
        "repository" : "https://github.com/mikeal/forever-agent",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/forever-agent/LICENSE"
      },
      "forever-agent@0.6.1"                : {
        "licenses"   : "Apache-2.0",
        "repository" : "https://github.com/mikeal/forever-agent",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/forever-agent/LICENSE"
      },
      "form-data@0.1.4"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/felixge/node-form-data",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/form-data/License"
      },
      "form-data@0.2.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/felixge/node-form-data",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/form-data/License"
      },
      "form-data@1.0.0-rc1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/felixge/node-form-data",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/form-data/License"
      },
      "formidable@1.0.14"                  : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/felixge/node-formidable",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/supertest/node_modules/superagent/node_modules/formidable/LICENSE"
      },
      "forwarded@0.1.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/forwarded",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/proxy-addr/node_modules/forwarded/LICENSE"
      },
      "fresh@0.2.4"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/fresh",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/fresh/LICENSE"
      },
      "fresh@0.3.0"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/fresh",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/fresh/LICENSE"
      },
      "fs-extra@0.18.4"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jprichardson/node-fs-extra",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/fs-extra/LICENSE"
      },
      "fs-extra@0.20.1"                    : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/jprichardson/node-fs-extra",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/session-file-store/node_modules/fs-extra/LICENSE"
      },
      "fsevents@0.3.6"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/strongloop/fsevents",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/fsevents/LICENSE"
      },
      "fstream-ignore@0.0.7"               : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/fstream-ignore",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/fstream-ignore/LICENSE"
      },
      "fstream-ignore@1.0.2"               : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/fstream-ignore",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/fstream-ignore/LICENSE"
      },
      "fstream@0.1.31"                     : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/fstream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/fstream/LICENSE"
      },
      "fstream@1.0.4"                      : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/fstream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar/node_modules/fstream/LICENSE"
      },
      "fstream@1.0.7"                      : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/fstream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/pangyp/node_modules/fstream/LICENSE"
      },
      "gauge@1.0.2"                        : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/iarna/gauge",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/pangyp/node_modules/npmlog/node_modules/gauge/LICENSE"
      },
      "gauge@1.2.0"                        : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/iarna/gauge",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/node_modules/gauge/LICENSE"
      },
      "gaze@0.5.1"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/shama/gaze",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-watch/node_modules/gaze/LICENSE-MIT"
      },
      "generate-function@2.0.0"            : {
        "licenses"  : "MIT",
        "repository": "https://github.com/mafintosh/generate-function"
      },
      "generate-object-property@1.1.1"     : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/mafintosh/generate-object-property",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property/LICENSE"
      },
      "generate-object-property@1.2.0"     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mafintosh/generate-object-property",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property/LICENSE"
      },
      "get-stdin@4.0.1"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/get-stdin"
      },
      "getobject@0.1.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/cowboy/node-getobject",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/getobject/LICENSE-MIT"
      },
      "github@0.2.4"                       : {
        "licenses"   : "The MIT License",
        "repository" : "http://github.com/mikedeboer/node-github",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/github/LICENSE"
      },
      "glob-base@0.2.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/glob-base",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/parse-glob/node_modules/glob-base/LICENSE"
      },
      "glob-parent@1.2.0"                  : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/es128/glob-parent",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/glob-parent/LICENSE"
      },
      "glob-stream@4.1.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/wearefractal/glob-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/vinyl-fs/node_modules/glob-stream/LICENSE"
      },
      "glob-watcher@0.0.8"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/wearefractal/glob-watcher",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/vinyl-fs/node_modules/glob-watcher/LICENSE"
      },
      "glob2base@0.0.12"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/wearefractal/glob2base",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/vinyl-fs/node_modules/glob-stream/node_modules/glob2base/LICENSE"
      },
      "glob@3.1.21"                        : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-glob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/glob/LICENSE"
      },
      "glob@3.2.11"                        : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-glob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/findup-sync/node_modules/glob/LICENSE"
      },
      "glob@3.2.3"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-glob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/mocha/node_modules/glob/LICENSE"
      },
      "glob@4.0.6"                         : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/node-glob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/glob/LICENSE"
      },
      "glob@4.3.5"                         : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/node-glob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/load-grunt-tasks/node_modules/findup-sync/node_modules/glob/LICENSE"
      },
      "glob@4.5.3"                         : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/node-glob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/session-file-store/node_modules/fs-extra/node_modules/rimraf/node_modules/glob/LICENSE"
      },
      "glob@5.0.10"                        : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/node-glob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/fileset/node_modules/glob/LICENSE"
      },
      "globule@0.1.0"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/cowboy/node-globule",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-watch/node_modules/gaze/node_modules/globule/LICENSE-MIT"
      },
      "google-cdn-data@0.1.17"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/shahata/google-cdn-data",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/google-cdn-data/LICENSE"
      },
      "google-cdn@0.7.0"                   : {
        "licenses"  : "BSD",
        "repository": "https://github.com/passy/google-cdn"
      },
      "got@0.3.0"                          : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/got"
      },
      "got@3.2.0"                          : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/got"
      },
      "graceful-fs@1.2.3"                  : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-graceful-fs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/graceful-fs/LICENSE"
      },
      "graceful-fs@2.0.3"                  : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-graceful-fs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/mocha/node_modules/glob/node_modules/graceful-fs/LICENSE"
      },
      "graceful-fs@3.0.6"                  : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-graceful-fs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar/node_modules/fstream/node_modules/graceful-fs/LICENSE"
      },
      "graceful-fs@3.0.8"                  : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/node-graceful-fs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/session-file-store/node_modules/fs-extra/node_modules/graceful-fs/LICENSE"
      },
      "graceful-readlink@1.0.1"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/zhiyelee/graceful-readlink",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/har-validator/node_modules/commander/node_modules/graceful-readlink/LICENSE"
      },
      "grunt-angular-templates@0.5.7"      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/ericclemmons/grunt-angular-templates",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/LICENSE"
      },
      "grunt-asset-injector@0.1.0"         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/daftmonk/grunt-asset-injector",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-asset-injector/LICENSE-MIT"
      },
      "grunt-autoprefixer@3.0.3"           : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/ndmitry/grunt-autoprefixer",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-autoprefixer/LICENSE"
      },
      "grunt-cli@0.1.13"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gruntjs/grunt-cli",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-cli/LICENSE-MIT"
      },
      "grunt-concurrent@1.0.1"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/grunt-concurrent",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-concurrent/license"
      },
      "grunt-connect-proxy@0.1.10"         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/drewzboto/grunt-connect-proxy",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-connect-proxy/LICENSE-MIT"
      },
      "grunt-contrib-clean@0.6.0"          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gruntjs/grunt-contrib-clean",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-clean/LICENSE-MIT"
      },
      "grunt-contrib-concat@0.5.1"         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/gruntjs/grunt-contrib-concat"
      },
      "grunt-contrib-connect@0.9.0"        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gruntjs/grunt-contrib-connect",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/LICENSE-MIT"
      },
      "grunt-contrib-copy@0.8.0"           : {
        "licenses"  : "MIT",
        "repository": "https://github.com/gruntjs/grunt-contrib-copy"
      },
      "grunt-contrib-cssmin@0.12.3"        : {
        "licenses"  : "MIT",
        "repository": "git+https://github.com/gruntjs/grunt-contrib-cssmin"
      },
      "grunt-contrib-htmlmin@0.4.0"        : {
        "licenses"  : "MIT",
        "repository": "https://github.com/gruntjs/grunt-contrib-htmlmin"
      },
      "grunt-contrib-imagemin@0.9.4"       : {
        "licenses"  : "MIT",
        "repository": "https://github.com/gruntjs/grunt-contrib-imagemin"
      },
      "grunt-contrib-jshint@0.11.2"        : {
        "licenses"  : "MIT",
        "repository": "https://github.com/gruntjs/grunt-contrib-jshint"
      },
      "grunt-contrib-uglify@0.8.1"         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/gruntjs/grunt-contrib-uglify"
      },
      "grunt-contrib-watch@0.6.1"          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gruntjs/grunt-contrib-watch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-watch/LICENSE-MIT"
      },
      "grunt-filerev@2.3.1"                : {
        "licenses"  : "BSD",
        "repository": "git+https://github.com/yeoman/grunt-filerev"
      },
      "grunt-google-cdn@0.4.3"             : {
        "licenses"  : "BSD",
        "repository": "https://github.com/btford/grunt-google-cdn"
      },
      "grunt-jsdoc@0.6.7"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/krampstudio/grunt-jsdoc",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-jsdoc/LICENSE-MIT"
      },
      "grunt-karma@0.10.1"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/karma-runner/grunt-karma",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-karma/LICENSE"
      },
      "grunt-legacy-log-utils@0.1.1"       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gruntjs/grunt-legacy-log-utils",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/grunt-legacy-log/node_modules/grunt-legacy-log-utils/LICENSE-MIT"
      },
      "grunt-legacy-log@0.1.2"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gruntjs/grunt-legacy-log",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/grunt-legacy-log/LICENSE-MIT"
      },
      "grunt-legacy-util@0.2.0"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gruntjs/grunt-legacy-util",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/grunt-legacy-util/LICENSE-MIT"
      },
      "grunt-newer@1.1.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/tschaub/grunt-newer",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-newer/LICENSE-MIT"
      },
      "grunt-ng-annotate@0.10.0"           : {
        "licenses"  : "MIT",
        "repository": "https://github.com/mzgol/grunt-ng-annotate"
      },
      "grunt-sass@1.0.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/grunt-sass",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/license"
      },
      "grunt-svgmin@2.0.1"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/grunt-svgmin",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-svgmin/license"
      },
      "grunt-usemin@3.0.0"                 : {
        "licenses"  : "BSD-2-Clause",
        "repository": "https://github.com/yeoman/grunt-usemin"
      },
      "grunt-wiredep@2.0.0"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/stephenplusplus/grunt-wiredep",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-wiredep/LICENSE-MIT"
      },
      "grunt@0.4.5"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gruntjs/grunt",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/LICENSE-MIT"
      },
      "gulp-rename@1.2.2"                  : {
        "licenses"  : "MIT",
        "repository": "https://github.com/hparra/gulp-rename"
      },
      "gzip-size@1.0.0"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/gzip-size"
      },
      "handlebars@2.0.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/wycats/handlebars.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/handlebars/LICENSE"
      },
      "handlebars@3.0.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/wycats/handlebars.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/handlebars/LICENSE"
      },
      "har-validator@1.7.0"                : {
        "licenses"  : "MIT",
        "repository": "git+https://github.com/ahmadnassri/har-validator"
      },
      "har-validator@1.7.1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/ahmadnassri/har-validator",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/har-validator/LICENSE"
      },
      "has-ansi@0.1.0"                     : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/has-ansi"
      },
      "has-ansi@1.0.3"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/has-ansi",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/chalk/node_modules/has-ansi/license"
      },
      "has-color@0.1.7"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/has-color"
      },
      "has-unicode@1.0.0"                  : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/iarna/has-unicode",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/node_modules/gauge/node_modules/has-unicode/LICENSE"
      },
      "hawk@1.1.1"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/hueniverse/hawk",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/hawk/LICENSE"
      },
      "hawk@2.3.1"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/hueniverse/hawk",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/hawk/LICENSE"
      },
      "hoek@0.9.1"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/spumko/hoek",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/hawk/node_modules/hoek/LICENSE"
      },
      "hoek@2.14.0"                        : {
        "licenses"   : "BSD-3-Clause",
        "repository" : "https://github.com/hapijs/hoek",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/hawk/node_modules/hoek/LICENSE"
      },
      "hooker@0.2.3"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/cowboy/javascript-hooker",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/time-grunt/node_modules/hooker/LICENSE-MIT"
      },
      "html-minifier@0.6.9"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/kangax/html-minifier",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/LICENSE"
      },
      "html-minifier@0.7.2"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/kangax/html-minifier",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/html-minifier/LICENSE"
      },
      "htmlparser2@3.8.3"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/fb55/htmlparser2",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/LICENSE"
      },
      "http-errors@1.3.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/http-errors",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/http-errors/LICENSE"
      },
      "http-proxy@0.10.4"                  : {
        "licenses"   : "MIT*",
        "repository" : "http://github.com/nodejitsu/node-http-proxy",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/http-proxy/LICENSE"
      },
      "http-signature@0.10.1"              : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/joyent/node-http-signature",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/http-signature/LICENSE"
      },
      "http-signature@0.11.0"              : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/joyent/node-http-signature",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/http-signature/LICENSE"
      },
      "i@0.3.3"                            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/pksunkara/inflect",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/http-proxy/node_modules/utile/node_modules/i/LICENSE"
      },
      "iconv-lite@0.2.11"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/ashtuchkin/iconv-lite",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/iconv-lite/LICENSE"
      },
      "iconv-lite@0.4.10"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/ashtuchkin/iconv-lite",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/iconv-lite/LICENSE"
      },
      "imagemin-svgo@4.1.2"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/imagemin/imagemin-svgo",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/imagemin-svgo/license"
      },
      "imagemin@3.2.0"                     : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/imagemin/imagemin",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/license"
      },
      "indent-string@1.2.1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/indent-string",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/pretty-bytes/node_modules/meow/node_modules/indent-string/license"
      },
      "infinity-agent@2.0.3"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/floatdrop/infinity-agent"
      },
      "inflight@1.0.4"                     : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/inflight",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/fileset/node_modules/glob/node_modules/inflight/LICENSE"
      },
      "inherits@2.0.1"                     : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/inherits",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/http-errors/node_modules/inherits/LICENSE"
      },
      "ini@1.3.3"                          : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/ini",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/rc/node_modules/ini/LICENSE"
      },
      "ini@1.3.4"                          : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/ini",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/npmconf/node_modules/ini/LICENSE"
      },
      "ink-docstrap@0.5.2"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/terryweiss/docstrap",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-jsdoc/node_modules/ink-docstrap/LICENSE.md"
      },
      "inquirer@0.6.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/SBoudrias/Inquirer.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/insight/node_modules/inquirer/LICENSE-MIT"
      },
      "inquirer@0.7.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/SBoudrias/Inquirer.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/inquirer/LICENSE-MIT"
      },
      "inquirer@0.8.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/SBoudrias/Inquirer.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/LICENSE-MIT"
      },
      "insight@0.4.3"                      : {
        "licenses"  : "BSD",
        "repository": "https://github.com/yeoman/insight"
      },
      "insight@0.5.3"                      : {
        "licenses"  : "BSD",
        "repository": "https://github.com/yeoman/insight"
      },
      "intersect@0.0.3"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/juliangruber/intersect"
      },
      "ipaddr.js@1.0.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/whitequark/ipaddr.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/proxy-addr/node_modules/ipaddr.js/LICENSE"
      },
      "is-absolute@0.1.7"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/is-absolute",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/which/node_modules/is-absolute/LICENSE"
      },
      "is-binary-path@1.0.1"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/is-binary-path",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/is-binary-path/license"
      },
      "is-dotfile@1.0.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/is-dotfile",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/parse-glob/node_modules/is-dotfile/LICENSE"
      },
      "is-equal-shallow@0.1.2"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/is-equal-shallow",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/regex-cache/node_modules/is-equal-shallow/LICENSE"
      },
      "is-extglob@1.0.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/is-extglob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/parse-glob/node_modules/is-extglob/LICENSE"
      },
      "is-finite@1.0.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/is-finite",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/pretty-bytes/node_modules/meow/node_modules/indent-string/node_modules/repeating/node_modules/is-finite/license"
      },
      "is-glob@1.1.3"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/is-glob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/is-glob/LICENSE"
      },
      "is-lower-case@1.1.1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/is-lower-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/is-lower-case/LICENSE"
      },
      "is-my-json-valid@2.10.1"            : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/mafintosh/is-my-json-valid",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/LICENSE"
      },
      "is-my-json-valid@2.12.0"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mafintosh/is-my-json-valid",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/LICENSE"
      },
      "is-npm@1.0.0"                       : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/is-npm"
      },
      "is-number@1.1.2"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/is-number",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/braces/node_modules/expand-range/node_modules/fill-range/node_modules/is-number/LICENSE"
      },
      "is-primitive@1.0.0"                 : {
        "licenses"  : "MIT",
        "repository": "https://github.com/jonschlinkert/is-primitive"
      },
      "is-primitive@2.0.0"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/is-primitive",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/regex-cache/node_modules/is-primitive/LICENSE"
      },
      "is-property@1.0.2"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mikolalysenko/is-property",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property/node_modules/is-property/LICENSE"
      },
      "is-relative@0.1.3"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/is-relative",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/which/node_modules/is-absolute/node_modules/is-relative/LICENSE-MIT"
      },
      "is-root@1.0.0"                      : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/is-root"
      },
      "is-stream@1.0.1"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/is-stream"
      },
      "is-svg@1.1.1"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/is-svg",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/imagemin-svgo/node_modules/is-svg/license"
      },
      "is-upper-case@1.1.1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/is-upper-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/is-upper-case/LICENSE"
      },
      "is-utf8@0.2.0"                      : {
        "licenses"  : "BSD",
        "repository": "https://github.com/wayfind/is-utf8"
      },
      "isarray@0.0.1"                      : {
        "licenses"  : "MIT",
        "repository": "https://github.com/juliangruber/isarray"
      },
      "isobject@0.2.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/isobject",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/object.omit/node_modules/isobject/LICENSE-MIT"
      },
      "isobject@1.0.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/isobject",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/braces/node_modules/expand-range/node_modules/fill-range/node_modules/isobject/LICENSE"
      },
      "isstream@0.1.2"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/rvagg/isstream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/isstream/LICENSE.md"
      },
      "istanbul@0.3.15"                    : {
        "licenses"   : "BSD-3-Clause",
        "repository" : "https://github.com/gotwarlost/istanbul",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/LICENSE"
      },
      "jade@0.26.3"                        : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/visionmedia/jade",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/mocha/node_modules/jade/LICENSE"
      },
      "jasmine-core@2.3.4"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jasmine/jasmine",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/jasmine-core/MIT.LICENSE"
      },
      "js-base64@2.1.8"                    : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/dankogai/js-base64",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-autoprefixer/node_modules/postcss/node_modules/js-base64/LICENSE.md"
      },
      "js-yaml@2.0.5"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/nodeca/js-yaml",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/js-yaml/LICENSE"
      },
      "js-yaml@3.3.1"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/nodeca/js-yaml",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/js-yaml/LICENSE"
      },
      "js2xmlparser@0.1.9"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/michaelkourlas/node-js2xmlparser",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/node_modules/js2xmlparser/LICENSE.md"
      },
      "jsdoc@3.3.2"                        : {
        "licenses"   : "Apache-2.0",
        "repository" : "git+https://github.com/jsdoc3/jsdoc",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/LICENSE.md"
      },
      "jshint-stylish@1.0.2"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/jshint-stylish",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/jshint-stylish/license"
      },
      "jshint@2.8.0"                       : {
        "licenses"   : "(MIT AND JSON)",
        "repository" : "https://github.com/jshint/jshint",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/LICENSE"
      },
      "json-stringify-safe@5.0.0"          : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/json-stringify-safe",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/json-stringify-safe/LICENSE"
      },
      "json-stringify-safe@5.0.1"          : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/json-stringify-safe",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/json-stringify-safe/LICENSE"
      },
      "jsonfile@2.1.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jprichardson/node-jsonfile",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/fs-extra/node_modules/jsonfile/LICENSE"
      },
      "jsonfile@2.2.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jprichardson/node-jsonfile",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/session-file-store/node_modules/fs-extra/node_modules/jsonfile/LICENSE"
      },
      "jsonify@0.0.0"                      : {
        "licenses"  : "Public Domain",
        "repository": "http://github.com/substack/jsonify"
      },
      "jsonpointer@1.1.0"                  : {
        "licenses"  : "MIT*",
        "repository": "http://github.com/janl/node-jsonpointer"
      },
      "junk@1.0.1"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/junk",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/junk/license"
      },
      "karma-coverage@0.4.2"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/karma-runner/karma-coverage",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-coverage/LICENSE-istanbul"
      },
      "karma-jasmine@0.3.5"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/karma-runner/karma-jasmine",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-jasmine/LICENSE"
      },
      "karma-ng-html2js-preprocessor@0.1.2": {
        "licenses"   : "MIT",
        "repository" : "https://github.com/karma-runner/karma-ng-html2js-preprocessor",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-ng-html2js-preprocessor/LICENSE"
      },
      "karma-phantomjs-launcher@0.1.4"     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/karma-runner/karma-phantomjs-launcher",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/LICENSE"
      },
      "karma@0.12.36"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/karma-runner/karma",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/LICENSE"
      },
      "kew@0.4.0"                          : {
        "licenses"   : "Apache*",
        "repository" : "https://github.com/Obvious/kew",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/kew/LICENSE.TXT"
      },
      "kind-of@1.1.0"                      : {
        "licenses"  : "MIT",
        "repository": "https://github.com/jonschlinkert/kind-of"
      },
      "kind-of@2.0.0"                      : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/jonschlinkert/kind-of",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/sass-graph/node_modules/yargs/node_modules/cliui/node_modules/center-align/node_modules/align-text/node_modules/kind-of/LICENSE"
      },
      "latest-version@0.2.0"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/latest-version"
      },
      "latest-version@1.0.1"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/latest-version",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/update-notifier/node_modules/latest-version/license"
      },
      "levn@0.2.5"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gkz/levn",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/optionator/node_modules/levn/LICENSE"
      },
      "load-grunt-tasks@3.2.0"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/load-grunt-tasks",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/load-grunt-tasks/license"
      },
      "lockfile@1.0.1"                     : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/lockfile",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/lockfile/LICENSE"
      },
      "lodash._arraycopy@3.0.0"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/node_modules/lodash._arraycopy/LICENSE.txt"
      },
      "lodash._arrayeach@3.0.0"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/node_modules/lodash._arrayeach/LICENSE.txt"
      },
      "lodash._baseassign@3.2.0"           : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/node_modules/lodash._baseassign/LICENSE.txt"
      },
      "lodash._baseclone@3.2.1"            : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/LICENSE.txt"
      },
      "lodash._basecopy@3.0.1"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/node_modules/lodash._baseassign/node_modules/lodash._basecopy/LICENSE.txt"
      },
      "lodash._basefor@3.0.2"              : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/node_modules/lodash._basefor/LICENSE.txt"
      },
      "lodash._basetostring@3.0.0"         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/node_modules/gauge/node_modules/lodash.pad/node_modules/lodash._basetostring/LICENSE.txt"
      },
      "lodash._bindcallback@3.0.1"         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._bindcallback/LICENSE.txt"
      },
      "lodash._createpadding@3.6.0"        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/node_modules/gauge/node_modules/lodash.pad/node_modules/lodash._createpadding/LICENSE.txt"
      },
      "lodash._getnative@3.9.0"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/node_modules/lodash._getnative/LICENSE.txt"
      },
      "lodash._isnative@2.4.1"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash-cli",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/insight/node_modules/lodash.debounce/node_modules/lodash.now/node_modules/lodash._isnative/LICENSE.txt"
      },
      "lodash._objecttypes@2.4.1"          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash-cli",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/insight/node_modules/lodash.debounce/node_modules/lodash.isobject/node_modules/lodash._objecttypes/LICENSE.txt"
      },
      "lodash.clonedeep@3.0.1"             : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/LICENSE.txt"
      },
      "lodash.debounce@2.4.1"              : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash-cli",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/insight/node_modules/lodash.debounce/LICENSE.txt"
      },
      "lodash.debounce@3.1.0"              : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/insight/node_modules/lodash.debounce/LICENSE.txt"
      },
      "lodash.isarguments@3.0.3"           : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/node_modules/lodash.keys/node_modules/lodash.isarguments/LICENSE.txt"
      },
      "lodash.isarray@3.0.3"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/node_modules/lodash.isarray/LICENSE.txt"
      },
      "lodash.isfunction@2.4.1"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash-cli",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/insight/node_modules/lodash.debounce/node_modules/lodash.isfunction/LICENSE.txt"
      },
      "lodash.isobject@2.4.1"              : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash-cli",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/insight/node_modules/lodash.debounce/node_modules/lodash.isobject/LICENSE.txt"
      },
      "lodash.keys@3.1.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/lodash.clonedeep/node_modules/lodash._baseclone/node_modules/lodash.keys/LICENSE.txt"
      },
      "lodash.now@2.4.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash-cli",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/insight/node_modules/lodash.debounce/node_modules/lodash.now/LICENSE.txt"
      },
      "lodash.pad@3.1.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/node_modules/gauge/node_modules/lodash.pad/LICENSE.txt"
      },
      "lodash.padleft@3.1.1"               : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/node_modules/gauge/node_modules/lodash.padleft/LICENSE.txt"
      },
      "lodash.padright@3.1.1"              : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/node_modules/gauge/node_modules/lodash.padright/LICENSE.txt"
      },
      "lodash.repeat@3.0.0"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/node_modules/gauge/node_modules/lodash.pad/node_modules/lodash._createpadding/node_modules/lodash.repeat/LICENSE.txt"
      },
      "lodash@0.9.2"                       : {
        "licenses"  : "MIT",
        "repository": "https://github.com/lodash/lodash"
      },
      "lodash@1.0.2"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-watch/node_modules/gaze/node_modules/globule/node_modules/lodash/LICENSE.txt"
      },
      "lodash@1.3.1"                       : {
        "licenses"  : "MIT",
        "repository": "https://github.com/lodash/lodash"
      },
      "lodash@2.4.1"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/nock/node_modules/lodash/LICENSE.txt"
      },
      "lodash@2.4.2"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-karma/node_modules/lodash/LICENSE.txt"
      },
      "lodash@3.7.0"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/lodash/LICENSE.txt"
      },
      "lodash@3.9.3"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/lodash/lodash",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/lodash/LICENSE.txt"
      },
      "log-symbols@1.0.2"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/log-symbols",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/jshint-stylish/node_modules/log-symbols/license"
      },
      "log4js@0.6.26"                      : {
        "licenses"  : "Apache-2.0",
        "repository": "https://github.com/nomiddlename/log4js-node"
      },
      "longest@1.0.1"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/longest",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/sass-graph/node_modules/yargs/node_modules/cliui/node_modules/center-align/node_modules/align-text/node_modules/longest/LICENSE"
      },
      "lower-case-first@1.0.0"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/lower-case-first",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/html-minifier/node_modules/change-case/node_modules/lower-case-first/LICENSE"
      },
      "lower-case@1.1.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/lower-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/lower-case/LICENSE"
      },
      "lowercase-keys@1.0.0"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/lowercase-keys"
      },
      "lpad@1.0.0"                         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/lpad"
      },
      "lru-cache@2.2.4"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/node-lru-cache",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/useragent/node_modules/lru-cache/LICENSE"
      },
      "lru-cache@2.3.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/node-lru-cache",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/bower-registry-client/node_modules/lru-cache/LICENSE"
      },
      "lru-cache@2.5.2"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/node-lru-cache",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/lru-cache/LICENSE"
      },
      "lru-cache@2.6.2"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/node-lru-cache",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/fstream-ignore/node_modules/minimatch/node_modules/lru-cache/LICENSE"
      },
      "lru-cache@2.6.4"                    : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/node-lru-cache",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/fileset/node_modules/minimatch/node_modules/lru-cache/LICENSE"
      },
      "lru-queue@0.1.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/lru-queue",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/memoizee/node_modules/lru-queue/LICENCE"
      },
      "map-obj@1.0.1"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/map-obj",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/pretty-bytes/node_modules/meow/node_modules/camelcase-keys/node_modules/map-obj/license"
      },
      "marked@0.3.3"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/chjj/marked",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/node_modules/marked/LICENSE"
      },
      "maxmin@1.1.0"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/maxmin",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-uglify/node_modules/maxmin/license"
      },
      "media-typer@0.3.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/media-typer",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/type-is/node_modules/media-typer/LICENSE"
      },
      "memoizee@0.3.8"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/memoize",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/memoizee/LICENCE"
      },
      "meow@3.3.0"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/meow",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/pretty-bytes/node_modules/meow/license"
      },
      "merge-descriptors@1.0.0"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/component/merge-descriptors",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/merge-descriptors/LICENSE"
      },
      "merge-stream@0.1.7"                 : {
        "licenses"  : "MIT",
        "repository": "https://github.com/grncdr/merge-stream"
      },
      "method-override@2.3.3"              : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/method-override",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/method-override/LICENSE"
      },
      "methods@1.0.1"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/visionmedia/node-methods",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/supertest/node_modules/superagent/node_modules/methods/LICENSE"
      },
      "methods@1.1.1"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/methods",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/methods/LICENSE"
      },
      "micromatch@2.1.6"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/micromatch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/LICENSE"
      },
      "mime-db@1.12.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/mime-db",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/mime-types/node_modules/mime-db/LICENSE"
      },
      "mime-db@1.13.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/mime-db",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/type-is/node_modules/mime-types/node_modules/mime-db/LICENSE"
      },
      "mime-db@1.8.0"                      : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/jshttp/mime-db",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/mime-types/node_modules/mime-db/LICENSE"
      },
      "mime-types@1.0.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/mime-types",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/mime-types/LICENSE"
      },
      "mime-types@2.0.10"                  : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/jshttp/mime-types",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/mime-types/LICENSE"
      },
      "mime-types@2.0.14"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/mime-types",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/mime-types/LICENSE"
      },
      "mime-types@2.1.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/mime-types",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/type-is/node_modules/mime-types/LICENSE"
      },
      "mime@1.2.11"                        : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/broofa/node-mime",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/form-data/node_modules/mime/LICENSE"
      },
      "mime@1.3.4"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/broofa/node-mime",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/send/node_modules/mime/LICENSE"
      },
      "minimatch@0.2.14"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/minimatch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/fstream-ignore/node_modules/minimatch/LICENSE"
      },
      "minimatch@0.3.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/minimatch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/findup-sync/node_modules/glob/node_modules/minimatch/LICENSE"
      },
      "minimatch@0.4.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/minimatch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/fileset/node_modules/minimatch/LICENSE"
      },
      "minimatch@1.0.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/minimatch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/glob/node_modules/minimatch/LICENSE"
      },
      "minimatch@2.0.8"                    : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/minimatch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/fileset/node_modules/glob/node_modules/minimatch/LICENSE"
      },
      "minimist@0.0.10"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/minimist",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/handlebars/node_modules/optimist/node_modules/minimist/LICENSE"
      },
      "minimist@0.0.8"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/minimist",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/mkdirp/node_modules/minimist/LICENSE"
      },
      "minimist@1.1.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/minimist",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-wiredep/node_modules/wiredep/node_modules/minimist/LICENSE"
      },
      "mkdirp@0.3.0"                       : {
        "licenses"   : "MIT/X11",
        "repository" : "https://github.com/substack/node-mkdirp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/mocha/node_modules/jade/node_modules/mkdirp/LICENSE"
      },
      "mkdirp@0.3.5"                       : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/substack/node-mkdirp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/bower-registry-client/node_modules/mkdirp/LICENSE"
      },
      "mkdirp@0.5.0"                       : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/substack/node-mkdirp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/mkdirp/LICENSE"
      },
      "mkdirp@0.5.1"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/node-mkdirp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/mkdirp/LICENSE"
      },
      "mkpath@0.1.0"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jrajav/mkpath",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/decompress-zip/node_modules/mkpath/LICENSE"
      },
      "mocha@2.2.5"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mochajs/mocha",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/mocha/LICENSE"
      },
      "moment@2.6.0"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/moment/moment",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-jsdoc/node_modules/ink-docstrap/node_modules/moment/LICENSE"
      },
      "morgan@1.6.0"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/morgan",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/morgan/LICENSE"
      },
      "mout@0.11.0"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mout/mout",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/mout/LICENSE.md"
      },
      "mout@0.9.1"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mout/mout",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-wiredep/node_modules/wiredep/node_modules/bower-config/node_modules/mout/LICENSE.md"
      },
      "ms@0.7.0"                           : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/guille/ms.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-usemin/node_modules/debug/node_modules/ms/LICENSE"
      },
      "ms@0.7.1"                           : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/guille/ms.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/debug/node_modules/ms/LICENSE"
      },
      "multimatch@2.0.0"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/multimatch"
      },
      "multiparty@3.3.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/andrewrk/node-multiparty",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/multiparty/LICENSE"
      },
      "mute-stream@0.0.4"                  : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/mute-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/mute-stream/LICENSE"
      },
      "mute-stream@0.0.5"                  : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/mute-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/promptly/node_modules/read/node_modules/mute-stream/LICENSE"
      },
      "nan@1.0.0"                          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/rvagg/nan",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/socket.io/node_modules/socket.io-client/node_modules/ws/node_modules/nan/LICENSE"
      },
      "nan@1.8.4"                          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/iojs/nan",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/bcrypt/node_modules/nan/LICENSE.md"
      },
      "ncp@0.4.2"                          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/AvianFlu/ncp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/http-proxy/node_modules/utile/node_modules/ncp/LICENSE.md"
      },
      "negotiator@0.5.3"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/negotiator",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/accepts/node_modules/negotiator/LICENSE"
      },
      "nested-error-stacks@1.0.0"          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mdlavin/nested-error-stacks",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/update-notifier/node_modules/latest-version/node_modules/package-json/node_modules/got/node_modules/nested-error-stacks/LICENSE"
      },
      "next-tick@0.2.2"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/next-tick",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/memoizee/node_modules/next-tick/LICENCE"
      },
      "ng-annotate@0.15.4"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/olov/ng-annotate",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/LICENSE"
      },
      "nock@2.6.0"                         : {
        "licenses"  : "MIT",
        "repository": "http://github.com/pgte/nock"
      },
      "node-pre-gyp@0.6.7"                 : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/mapbox/node-pre-gyp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/LICENSE"
      },
      "node-sass@3.2.0"                    : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/sass/node-sass",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/LICENSE"
      },
      "node-uuid@1.4.3"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/broofa/node-uuid",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/node-uuid/LICENSE.md"
      },
      "nopt@1.0.10"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/nopt",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt/node_modules/nopt/LICENSE"
      },
      "nopt@2.0.0"                         : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/isaacs/nopt",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-watch/node_modules/tiny-lr-fork/node_modules/noptify/node_modules/nopt/LICENSE"
      },
      "nopt@2.2.1"                         : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/isaacs/nopt",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/decompress-zip/node_modules/nopt/LICENSE"
      },
      "nopt@3.0.1"                         : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/isaacs/nopt",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/nopt/LICENSE"
      },
      "nopt@3.0.2"                         : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/nopt",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/nopt/LICENSE"
      },
      "npmconf@2.1.1"                      : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/npm/npmconf",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/npmconf/LICENSE"
      },
      "npmconf@2.1.2"                      : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/npm/npmconf",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/npmconf/LICENSE"
      },
      "npmlog@1.0.0"                       : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/npmlog",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/pangyp/node_modules/npmlog/LICENSE"
      },
      "npmlog@1.2.0"                       : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/npmlog",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/LICENSE"
      },
      "num2fraction@1.1.0"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/yisibl/num2fraction",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-autoprefixer/node_modules/autoprefixer-core/node_modules/num2fraction/LICENSE"
      },
      "number-is-nan@1.0.0"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/number-is-nan",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/time-grunt/node_modules/number-is-nan/license"
      },
      "oauth-sign@0.4.0"                   : {
        "licenses"   : "Apache*",
        "repository" : "https://github.com/mikeal/oauth-sign",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/oauth-sign/LICENSE"
      },
      "oauth-sign@0.5.0"                   : {
        "licenses"   : "Apache*",
        "repository" : "https://github.com/mikeal/oauth-sign",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/pangyp/node_modules/request/node_modules/oauth-sign/LICENSE"
      },
      "oauth-sign@0.6.0"                   : {
        "licenses"   : "Apache*",
        "repository" : "git+https://github.com/mikeal/oauth-sign",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/oauth-sign/LICENSE"
      },
      "oauth-sign@0.8.0"                   : {
        "licenses"   : "Apache-2.0",
        "repository" : "git+https://github.com/mikeal/oauth-sign",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/oauth-sign/LICENSE"
      },
      "object-assign@0.3.1"                : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/object-assign"
      },
      "object-assign@1.0.0"                : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/object-assign"
      },
      "object-assign@2.1.1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/object-assign",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/vinyl-fs/node_modules/object-assign/license"
      },
      "object-assign@3.0.0"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/object-assign",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/pretty-bytes/node_modules/meow/node_modules/object-assign/license"
      },
      "object.omit@0.2.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/object.omit",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/object.omit/LICENSE-MIT"
      },
      "on-finished@2.2.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/on-finished",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/on-finished/LICENSE"
      },
      "on-finished@2.3.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/on-finished",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/on-finished/LICENSE"
      },
      "on-headers@1.0.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/on-headers",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express-session/node_modules/on-headers/LICENSE"
      },
      "once@1.1.1"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/once",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/once/LICENSE"
      },
      "once@1.2.0"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/once",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/tar-fs/node_modules/pump/node_modules/once/LICENSE"
      },
      "once@1.3.2"                         : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/once",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/once/LICENSE"
      },
      "onetime@1.0.0"                      : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/onetime"
      },
      "opn@1.0.2"                          : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/opn",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/opn/license"
      },
      "optimist@0.3.7"                     : {
        "licenses"   : "MIT/X11",
        "repository" : "http://github.com/substack/node-optimist",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/handlebars/node_modules/uglify-js/node_modules/optimist/LICENSE"
      },
      "optimist@0.6.1"                     : {
        "licenses"   : "MIT/X11",
        "repository" : "http://github.com/substack/node-optimist",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/handlebars/node_modules/optimist/LICENSE"
      },
      "optional@0.1.3"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/tony-o/node-optional",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/optional/LICENSE"
      },
      "optionator@0.5.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gkz/optionator",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/optionator/LICENSE"
      },
      "ordered-ast-traverse@1.1.1"         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/olov/ordered-ast-traverse",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/ordered-ast-traverse/LICENSE"
      },
      "ordered-esprima-props@1.1.0"        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/olov/ordered-esprima-props",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/ordered-ast-traverse/node_modules/ordered-esprima-props/LICENSE"
      },
      "ordered-read-streams@0.1.0"         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/armed/ordered-read-streams",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/vinyl-fs/node_modules/glob-stream/node_modules/ordered-read-streams/LICENSE"
      },
      "os-name@1.0.3"                      : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/os-name"
      },
      "os-tmpdir@1.0.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/os-tmpdir",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/npmconf/node_modules/osenv/node_modules/os-tmpdir/license"
      },
      "osenv@0.0.3"                        : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/osenv",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-wiredep/node_modules/wiredep/node_modules/bower-config/node_modules/osenv/LICENSE"
      },
      "osenv@0.1.0"                        : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/osenv",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/osenv/LICENSE"
      },
      "osenv@0.1.2"                        : {
        "licenses"   : "ISC",
        "repository" : "git+https://github.com/npm/osenv",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/npmconf/node_modules/osenv/LICENSE"
      },
      "osx-release@1.1.0"                  : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/sindresorhus/osx-release",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/insight/node_modules/os-name/node_modules/osx-release/license"
      },
      "p-throttler@0.1.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/IndigoUnited/node-p-throttler",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/p-throttler/LICENSE"
      },
      "p-throttler@0.1.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/IndigoUnited/node-p-throttler",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/p-throttler/LICENSE"
      },
      "package-json@0.2.0"                 : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/package-json"
      },
      "package-json@1.2.0"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/package-json",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/update-notifier/node_modules/latest-version/node_modules/package-json/license"
      },
      "pad-stdio@1.0.0"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/pad-stdio"
      },
      "pako@0.2.7"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/nodeca/pako",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-uglify/node_modules/maxmin/node_modules/gzip-size/node_modules/browserify-zlib/node_modules/pako/LICENSE"
      },
      "pangyp@2.2.1"                       : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/rvagg/pangyp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/pangyp/LICENSE"
      },
      "param-case@1.1.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/param-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/param-case/LICENSE"
      },
      "parse-glob@3.0.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/parse-glob",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/parse-glob/LICENSE"
      },
      "parse-ms@1.0.0"                     : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/parse-ms"
      },
      "parseurl@1.3.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/parseurl",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/parseurl/LICENSE"
      },
      "pascal-case@1.1.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/pascal-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/pascal-case/LICENSE"
      },
      "passport-http@0.2.2"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jaredhanson/passport-http",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/passport-http/LICENSE"
      },
      "passport-local@1.0.0"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jaredhanson/passport-local",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/passport-local/LICENSE"
      },
      "passport-strategy@1.0.0"            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jaredhanson/passport-strategy",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/passport/node_modules/passport-strategy/LICENSE"
      },
      "passport@0.1.18"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jaredhanson/passport",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/passport-http/node_modules/passport/LICENSE"
      },
      "passport@0.2.2"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jaredhanson/passport",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/passport/LICENSE"
      },
      "path-case@1.1.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/path-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/path-case/LICENSE"
      },
      "path-exists@1.0.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/path-exists",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/path-exists/license"
      },
      "path-is-absolute@1.0.0"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/path-is-absolute",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/fileset/node_modules/glob/node_modules/path-is-absolute/license"
      },
      "phantomjs@1.9.17"                   : {
        "licenses"   : "Apache-2.0",
        "repository" : "https://github.com/Medium/phantomjs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/LICENSE.txt"
      },
      "pkginfo@0.3.0"                      : {
        "licenses"   : "MIT*",
        "repository" : "http://github.com/indexzero/node-pkginfo",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/http-proxy/node_modules/pkginfo/LICENSE"
      },
      "policyfile@0.0.4"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/3rd-Eden/FlashPolicyFileServer",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/socket.io/node_modules/policyfile/LICENSE"
      },
      "portscanner@1.0.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/baalexander/node-portscanner",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/portscanner/LICENSE"
      },
      "postcss@4.1.12"                     : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/postcss/postcss",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-autoprefixer/node_modules/postcss/LICENSE"
      },
      "prelude-ls@1.1.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gkz/prelude-ls",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/optionator/node_modules/prelude-ls/LICENSE"
      },
      "prepend-http@1.0.1"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/prepend-http",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/update-notifier/node_modules/latest-version/node_modules/package-json/node_modules/got/node_modules/prepend-http/license"
      },
      "preserve@0.2.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/preserve",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/braces/node_modules/preserve/LICENSE"
      },
      "pretty-bytes@1.0.4"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/pretty-bytes",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/pretty-bytes/license"
      },
      "pretty-ms@1.1.0"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/pretty-ms"
      },
      "process-nextick-args@1.0.1"         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/calvinmetcalf/process-nextick-args"
      },
      "progress@1.1.8"                     : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/visionmedia/node-progress",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/progress/LICENSE"
      },
      "promptly@0.2.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/IndigoUnited/node-promptly",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/promptly/LICENSE"
      },
      "propagate@0.3.1"                    : {
        "licenses"  : "MIT",
        "repository": "http://github.com/pgte/propagate"
      },
      "proto-list@1.2.4"                   : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/proto-list",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/npmconf/node_modules/config-chain/node_modules/proto-list/LICENSE"
      },
      "proxy-addr@1.0.8"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/proxy-addr",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/proxy-addr/LICENSE"
      },
      "pump@0.3.5"                         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/mafintosh/pump"
      },
      "pump@1.0.0"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mafintosh/pump",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/tar-fs/node_modules/pump/LICENSE"
      },
      "punycode@1.3.2"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bestiejs/punycode.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/insight/node_modules/tough-cookie/node_modules/punycode/LICENSE-MIT.txt"
      },
      "q@0.9.7"                            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/kriskowal/q",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/p-throttler/node_modules/q/LICENSE"
      },
      "q@1.0.1"                            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/kriskowal/q",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/q/LICENSE"
      },
      "q@1.4.1"                            : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/kriskowal/q",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/q/LICENSE"
      },
      "qs@0.5.6"                           : {
        "licenses"  : "MIT*",
        "repository": "https://github.com/visionmedia/node-querystring"
      },
      "qs@1.2.2"                           : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/hapijs/qs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/qs/LICENSE"
      },
      "qs@2.3.3"                           : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/hapijs/qs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/supertest/node_modules/superagent/node_modules/qs/LICENSE"
      },
      "qs@2.4.1"                           : {
        "licenses"   : "BSD",
        "repository" : "git+https://github.com/hapijs/qs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/qs/LICENSE"
      },
      "qs@2.4.2"                           : {
        "licenses"   : "BSD",
        "repository" : "git+https://github.com/hapijs/qs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/qs/LICENSE"
      },
      "qs@3.1.0"                           : {
        "licenses"   : "BSD-3-Clause",
        "repository" : "git+https://github.com/hapijs/qs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/qs/LICENSE"
      },
      "randomatic@1.1.0"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/jonschlinkert/randomatic"
      },
      "range-parser@1.0.2"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/range-parser",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/range-parser/LICENSE"
      },
      "raw-body@2.1.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/stream-utils/raw-body",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/raw-body/LICENSE"
      },
      "rc@1.0.1"                           : {
        "licenses"   : [
          "BSD",
          "MIT",
          "Apache2"
        ],
        "repository" : "https://github.com/dominictarr/rc",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/rc/LICENSE.MIT"
      },
      "rc@1.0.3"                           : {
        "licenses"   : "(BSD OR MIT OR Apache2)",
        "repository" : "https://github.com/dominictarr/rc",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/update-notifier/node_modules/latest-version/node_modules/package-json/node_modules/registry-url/node_modules/rc/LICENSE.MIT"
      },
      "read-all-stream@2.1.2"              : {
        "licenses"  : "MIT",
        "repository": "https://github.com/floatdrop/read-all-stream"
      },
      "read@1.0.6"                         : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/read",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/promptly/node_modules/read/LICENSE"
      },
      "readable-stream@1.0.27-1"           : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/readable-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/supertest/node_modules/superagent/node_modules/readable-stream/LICENSE"
      },
      "readable-stream@1.0.33"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/readable-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/bl/node_modules/readable-stream/LICENSE"
      },
      "readable-stream@1.1.13"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/readable-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/npmlog/node_modules/are-we-there-yet/node_modules/readable-stream/LICENSE"
      },
      "readable-stream@2.0.0"              : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/nodejs/readable-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-uglify/node_modules/maxmin/node_modules/gzip-size/node_modules/concat-stream/node_modules/readable-stream/LICENSE"
      },
      "readdirp@1.3.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/thlorenz/readdirp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/readdirp/LICENSE"
      },
      "readline2@0.1.1"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/SBoudrias/readline2"
      },
      "redeyed@0.4.4"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/thlorenz/redeyed",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/cardinal/node_modules/redeyed/LICENSE"
      },
      "reduce-component@1.0.1"             : {
        "licenses"   : "Apache, Version 2.0",
        "repository" : "https://github.com/redventures/reduce",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/supertest/node_modules/superagent/node_modules/reduce-component/LICENSE"
      },
      "regex-cache@0.4.2"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/regex-cache",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/regex-cache/LICENSE"
      },
      "registry-url@0.1.1"                 : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/registry-url"
      },
      "registry-url@3.0.3"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/registry-url",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/update-notifier/node_modules/latest-version/node_modules/package-json/node_modules/registry-url/license"
      },
      "relateurl@0.2.6"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/stevenvachon/relateurl",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/relateurl/LICENSE"
      },
      "repeat-element@1.1.2"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/repeat-element",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/braces/node_modules/repeat-element/LICENSE"
      },
      "repeat-string@1.5.2"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/repeat-string",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/chokidar/node_modules/anymatch/node_modules/micromatch/node_modules/braces/node_modules/expand-range/node_modules/fill-range/node_modules/repeat-string/LICENSE"
      },
      "repeating@1.1.3"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/repeating",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/pretty-bytes/node_modules/meow/node_modules/indent-string/node_modules/repeating/license"
      },
      "request-progress@0.3.0"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/IndigoUnited/node-request-progress",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/request-progress/LICENSE"
      },
      "request-progress@0.3.1"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/IndigoUnited/node-request-progress",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request-progress/LICENSE"
      },
      "request-replay@0.2.0"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/IndigoUnited/node-request-replay",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/bower-registry-client/node_modules/request-replay/LICENSE"
      },
      "request@2.42.0"                     : {
        "licenses"   : "Apache-2.0",
        "repository" : "https://github.com/mikeal/request",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/LICENSE"
      },
      "request@2.51.0"                     : {
        "licenses"   : "Apache-2.0",
        "repository" : "https://github.com/request/request",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/pangyp/node_modules/request/LICENSE"
      },
      "request@2.53.0"                     : {
        "licenses"   : "Apache-2.0",
        "repository" : "https://github.com/request/request",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/request/LICENSE"
      },
      "request@2.55.0"                     : {
        "licenses"   : "Apache-2.0",
        "repository" : "git+https://github.com/request/request",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/LICENSE"
      },
      "request@2.58.0"                     : {
        "licenses"   : "Apache-2.0",
        "repository" : "git+https://github.com/request/request",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/LICENSE"
      },
      "requizzle@0.2.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/hegemonic/requizzle",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/node_modules/requizzle/LICENSE"
      },
      "resolve@0.3.1"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/node-resolve",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-cli/node_modules/resolve/LICENSE"
      },
      "resolve@1.1.6"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/node-resolve",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/resolve/LICENSE"
      },
      "response-time@2.3.1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/response-time",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/response-time/LICENSE"
      },
      "retry@0.6.0"                        : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/felixge/node-retry",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/retry/License"
      },
      "retry@0.6.1"                        : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/tim-kos/node-retry",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/session-file-store/node_modules/retry/License"
      },
      "rex@0.0.0"                          : {
        "licenses"   : "MIT*",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/licenses"
      },
      "right-align@0.1.3"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/right-align",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/sass-graph/node_modules/yargs/node_modules/cliui/node_modules/right-align/LICENSE"
      },
      "rimraf@2.2.8"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/rimraf",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/rimraf/LICENSE"
      },
      "rimraf@2.3.3"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/isaacs/rimraf",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/rimraf/LICENSE"
      },
      "rimraf@2.4.0"                       : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/rimraf",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/session-file-store/node_modules/fs-extra/node_modules/rimraf/LICENSE"
      },
      "rndm@1.1.0"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/crypto-utils/rndm",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/csurf/node_modules/csrf/node_modules/rndm/LICENSE"
      },
      "rx@2.5.3"                           : {
        "licenses"   : "Apache-2.0",
        "repository" : "https://github.com/Reactive-Extensions/RxJS",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/rx/license.txt"
      },
      "sass-graph@2.0.0"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/xzyfer/sass-graph"
      },
      "sax@1.1.1"                          : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/sax-js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-svgmin/node_modules/svgo/node_modules/sax/LICENSE-W3C.html"
      },
      "scmp@1.0.0"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/freewil/scmp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/csurf/node_modules/csrf/node_modules/scmp/LICENSE"
      },
      "semver-diff@0.1.0"                  : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/semver-diff"
      },
      "semver-diff@2.0.0"                  : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/semver-diff"
      },
      "semver@2.2.1"                       : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-semver",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/cdnjs-cdn-data/node_modules/semver/LICENSE"
      },
      "semver@2.3.2"                       : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-semver",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/semver/LICENSE"
      },
      "semver@4.3.3"                       : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/npm/node-semver",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/semver/LICENSE"
      },
      "semver@4.3.6"                       : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/npm/node-semver",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/log4js/node_modules/semver/LICENSE"
      },
      "send@0.12.3"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/pillarjs/send",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/send/LICENSE"
      },
      "send@0.13.0"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/pillarjs/send",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/serve-static/node_modules/send/LICENSE"
      },
      "sentence-case@1.1.2"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/sentence-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/sentence-case/LICENSE"
      },
      "serve-favicon@2.3.0"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/serve-favicon",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/serve-favicon/LICENSE"
      },
      "serve-index@1.7.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/serve-index",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/serve-index/LICENSE"
      },
      "serve-static@1.10.0"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/serve-static",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/serve-static/LICENSE"
      },
      "serve-static@1.9.3"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/serve-static",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/serve-static/LICENSE"
      },
      "session-file-store@0.0.14"          : {
        "licenses"   : "Apache-2.0",
        "repository" : "git+https://github.com/valery-barysok/session-file-store",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/session-file-store/LICENSE"
      },
      "set-immediate-shim@1.0.1"           : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/set-immediate-shim"
      },
      "shell-quote@1.4.3"                  : {
        "licenses"   : "MIT",
        "repository" : "http://github.com/substack/node-shell-quote",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/shell-quote/LICENSE"
      },
      "shelljs@0.3.0"                      : {
        "licenses"   : "BSD*",
        "repository" : "https://github.com/arturadib/shelljs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/shelljs/LICENSE"
      },
      "sigmund@1.0.0"                      : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/sigmund",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/fstream-ignore/node_modules/minimatch/node_modules/sigmund/LICENSE"
      },
      "sigmund@1.0.1"                      : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/sigmund",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/fileset/node_modules/minimatch/node_modules/sigmund/LICENSE"
      },
      "simple-fmt@0.1.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/olov/simple-fmt",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/simple-fmt/LICENSE"
      },
      "simple-is@0.2.0"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/olov/simple-is",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/simple-is/LICENSE"
      },
      "snake-case@1.1.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/snake-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/snake-case/LICENSE"
      },
      "sntp@0.2.4"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/hueniverse/sntp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/request/node_modules/hawk/node_modules/sntp/LICENSE"
      },
      "sntp@1.0.9"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/hueniverse/sntp",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/hawk/node_modules/sntp/LICENSE"
      },
      "socket.io@0.9.16"                   : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/LearnBoost/socket.io",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/socket.io/LICENSE"
      },
      "source-map@0.1.34"                  : {
        "licenses"   : "BSD",
        "repository" : "http://github.com/mozilla/source-map",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/uglify-js/node_modules/source-map/LICENSE"
      },
      "source-map@0.1.43"                  : {
        "licenses"   : "BSD",
        "repository" : "http://github.com/mozilla/source-map",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/source-map/LICENSE"
      },
      "source-map@0.3.0"                   : {
        "licenses"   : "BSD",
        "repository" : "http://github.com/mozilla/source-map",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-concat/node_modules/source-map/LICENSE"
      },
      "source-map@0.4.2"                   : {
        "licenses"   : "BSD",
        "repository" : "http://github.com/mozilla/source-map",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-autoprefixer/node_modules/postcss/node_modules/source-map/LICENSE"
      },
      "sprintf-js@1.0.2"                   : {
        "licenses"   : "BSD-3-Clause",
        "repository" : "https://github.com/alexei/sprintf.js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/js-yaml/node_modules/argparse/node_modules/sprintf-js/LICENSE"
      },
      "sqlite3@3.0.8"                      : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/mapbox/node-sqlite3",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/LICENSE"
      },
      "stable@0.1.5"                       : {
        "licenses"  : "MIT",
        "repository": "https://github.com/Two-Screen/stable"
      },
      "statuses@1.2.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/statuses",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/http-errors/node_modules/statuses/LICENSE"
      },
      "stream-combiner2@1.0.2"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/stream-combiner2",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/stream-combiner2/LICENSE"
      },
      "stream-counter@0.2.0"               : {
        "licenses"  : "BSD",
        "repository": "https://github.com/superjoe30/node-stream-counter"
      },
      "string-length@0.1.2"                : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/string-length"
      },
      "string-length@1.0.0"                : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/string-length"
      },
      "string_decoder@0.10.31"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/rvagg/string_decoder",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/string_decoder/LICENSE"
      },
      "stringify-object@1.0.1"             : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/yeoman/stringify-object",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/stringify-object/license"
      },
      "stringmap@0.2.2"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/olov/stringmap",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/stringmap/LICENSE"
      },
      "stringset@0.2.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/olov/stringset",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/stringset/LICENSE"
      },
      "stringstream@0.0.4"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mhart/StringStream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/stringstream/LICENSE.txt"
      },
      "strip-ansi@0.2.2"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/strip-ansi"
      },
      "strip-ansi@0.3.0"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/strip-ansi"
      },
      "strip-ansi@2.0.1"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/strip-ansi"
      },
      "strip-bom@1.0.0"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/strip-bom"
      },
      "strip-json-comments@0.1.3"          : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/strip-json-comments"
      },
      "strip-json-comments@1.0.2"          : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/strip-json-comments"
      },
      "superagent@1.2.0"                   : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/visionmedia/superagent",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/supertest/node_modules/superagent/LICENSE"
      },
      "supertest@1.0.1"                    : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/visionmedia/supertest",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/supertest/LICENSE"
      },
      "supports-color@0.2.0"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/supports-color"
      },
      "supports-color@1.2.1"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/supports-color",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/mocha/node_modules/supports-color/license"
      },
      "supports-color@1.3.1"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/supports-color",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/chalk/node_modules/supports-color/license"
      },
      "svgo@0.5.2"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/svg/svgo",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-svgmin/node_modules/svgo/LICENSE"
      },
      "swap-case@1.1.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/swap-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/swap-case/LICENSE"
      },
      "taffydb@2.6.2"                      : {
        "licenses"  : "BSD",
        "repository": "https://github.com/hegemonic/taffydb"
      },
      "tar-fs@0.5.2"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com:mafintosh/tar-fs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/tar-fs/LICENSE"
      },
      "tar-fs@1.5.1"                       : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/mafintosh/tar-fs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/tar-fs/LICENSE"
      },
      "tar-pack@2.0.0"                     : {
        "licenses"  : "BSD",
        "repository": "https://github.com/ForbesLindesay/tar-pack"
      },
      "tar-stream@0.4.7"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com:mafintosh/tar-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/tar-fs/node_modules/tar-stream/LICENSE"
      },
      "tar-stream@1.2.0"                   : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/mafintosh/tar-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/tar-fs/node_modules/tar-stream/LICENSE"
      },
      "tar@0.1.20"                         : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-tar",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/tar/LICENCE"
      },
      "tar@1.0.3"                          : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-tar",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/pangyp/node_modules/tar/LICENCE"
      },
      "tar@2.1.0"                          : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/node-tar",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar/LICENCE"
      },
      "text-table@0.2.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/text-table",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/time-grunt/node_modules/text-table/LICENSE"
      },
      "throttleit@0.0.2"                   : {
        "licenses"  : "MIT",
        "repository": "https://github.com/component/throttle"
      },
      "through2-filter@1.4.1"              : {
        "licenses"  : "MIT",
        "repository": "https://github.com/brycebaril/through2-filter"
      },
      "through2@0.5.1"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/rvagg/through2",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/stream-combiner2/node_modules/through2/LICENSE"
      },
      "through2@0.6.5"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/rvagg/through2",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-wiredep/node_modules/wiredep/node_modules/through2/LICENSE"
      },
      "through@2.3.7"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/dominictarr/through",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/through/LICENSE.MIT"
      },
      "time-grunt@1.2.1"                   : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/sindresorhus/time-grunt",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/time-grunt/license"
      },
      "timed-out@2.0.0"                    : {
        "licenses"  : "MIT",
        "repository": "https://github.com/floatdrop/timed-out"
      },
      "timers-ext@0.1.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/medikoo/timers-ext",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/inquirer/node_modules/cli-color/node_modules/timers-ext/LICENCE"
      },
      "tiny-lr-fork@0.0.5"                 : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/mklabs/tiny-lr",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-watch/node_modules/tiny-lr-fork/LICENSE-MIT"
      },
      "title-case@1.1.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/title-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/title-case/LICENSE"
      },
      "tmp@0.0.23"                         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/raszi/node-tmp"
      },
      "tmp@0.0.24"                         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/raszi/node-tmp"
      },
      "touch@0.0.2"                        : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/isaacs/node-touch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/google-cdn/node_modules/bower/node_modules/decompress-zip/node_modules/touch/LICENSE"
      },
      "touch@0.0.3"                        : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/node-touch",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/decompress-zip/node_modules/touch/LICENSE"
      },
      "tough-cookie@0.12.1"                : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/goinstant/tough-cookie",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/insight/node_modules/tough-cookie/LICENSE"
      },
      "tough-cookie@1.1.0"                 : {
        "licenses"   : "BSD-3-Clause",
        "repository" : "https://github.com/SalesforceEng/tough-cookie",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/request/node_modules/tough-cookie/LICENSE"
      },
      "tough-cookie@2.0.0"                 : {
        "licenses"   : "BSD-3-Clause",
        "repository" : "https://github.com/SalesforceEng/tough-cookie",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/tough-cookie/LICENSE"
      },
      "traverse@0.3.9"                     : {
        "licenses"   : "MIT/X11",
        "repository" : "http://github.com/substack/js-traverse",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/decompress-zip/node_modules/binary/node_modules/chainsaw/node_modules/traverse/LICENSE"
      },
      "tryor@0.1.2"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/olov/tryor",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-ng-annotate/node_modules/ng-annotate/node_modules/tryor/LICENSE"
      },
      "tunnel-agent@0.4.0"                 : {
        "licenses"   : "Apache*",
        "repository" : "https://github.com/mikeal/tunnel-agent",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/tunnel-agent/LICENSE"
      },
      "type-check@0.3.1"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/gkz/type-check",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/escodegen/node_modules/optionator/node_modules/type-check/LICENSE"
      },
      "type-detect@0.1.1"                  : {
        "licenses"  : "MIT",
        "repository": "https://github.com/chaijs/type-detect"
      },
      "type-is@1.6.3"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/type-is",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/type-is/LICENSE"
      },
      "typedarray@0.0.6"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/typedarray",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-htmlmin/node_modules/html-minifier/node_modules/concat-stream/node_modules/typedarray/LICENSE"
      },
      "uglify-js@2.3.6"                    : {
        "licenses"   : "BSD*",
        "repository" : "https://github.com/mishoo/UglifyJS2",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/handlebars/node_modules/uglify-js/LICENSE"
      },
      "uglify-js@2.4.17"                   : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/mishoo/UglifyJS2",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-uglify/node_modules/uglify-js/LICENSE"
      },
      "uglify-js@2.4.23"                   : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/mishoo/UglifyJS2",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/uglify-js/LICENSE"
      },
      "uglify-to-browserify@1.0.2"         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/ForbesLindesay/uglify-to-browserify",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/uglify-js/node_modules/uglify-to-browserify/LICENSE"
      },
      "uid-number@0.0.3"                   : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/isaacs/uid-number",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/sqlite3/node_modules/node-pre-gyp/node_modules/tar-pack/node_modules/uid-number/LICENCE"
      },
      "uid-number@0.0.5"                   : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/uid-number",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/node_modules/npmconf/node_modules/uid-number/LICENSE"
      },
      "uid-safe@2.0.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/crypto-utils/uid-safe",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express-session/node_modules/uid-safe/LICENSE"
      },
      "underscore-contrib@0.3.0"           : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/documentcloud/underscore-contrib",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/node_modules/catharsis/node_modules/underscore-contrib/LICENSE"
      },
      "underscore.string@2.2.1"            : {
        "licenses"  : "MIT",
        "repository": "https://github.com/epeli/underscore.string"
      },
      "underscore.string@2.3.3"            : {
        "licenses"  : "MIT",
        "repository": "https://github.com/epeli/underscore.string"
      },
      "underscore.string@2.4.0"            : {
        "licenses"  : "MIT",
        "repository": "https://github.com/epeli/underscore.string"
      },
      "underscore@1.6.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jashkenas/underscore",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/node_modules/catharsis/node_modules/underscore-contrib/node_modules/underscore/LICENSE"
      },
      "underscore@1.7.0"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jashkenas/underscore",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/node_modules/underscore/LICENSE"
      },
      "underscore@1.8.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jashkenas/underscore",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/log4js/node_modules/underscore/LICENSE"
      },
      "unique-stream@2.1.1"                : {
        "licenses"   : "BSD",
        "repository" : "https://github.com/eugeneware/unique-stream",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/vinyl-fs/node_modules/glob-stream/node_modules/unique-stream/LICENSE"
      },
      "unpipe@1.0.0"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/stream-utils/unpipe",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/body-parser/node_modules/raw-body/node_modules/unpipe/LICENSE"
      },
      "update-notifier@0.2.0"              : {
        "licenses"  : "BSD",
        "repository": "https://github.com/yeoman/update-notifier"
      },
      "update-notifier@0.3.2"              : {
        "licenses"  : "BSD",
        "repository": "https://github.com/yeoman/update-notifier"
      },
      "upper-case-first@1.1.1"             : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/upper-case-first",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/upper-case-first/LICENSE"
      },
      "upper-case@1.1.2"                   : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/blakeembrey/upper-case",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/change-case/node_modules/upper-case/LICENSE"
      },
      "uri-path@0.0.2"                     : {
        "licenses"   : "WTFPL",
        "repository" : "https://github.com/UltCombo/uri-path",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-uglify/node_modules/uri-path/LICENSE"
      },
      "user-home@1.1.1"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/user-home",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/user-home/license"
      },
      "useragent@2.1.7"                    : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/3rd-Eden/useragent",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/useragent/LICENSE"
      },
      "util-deprecate@1.0.1"               : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/TooTallNate/util-deprecate",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-uglify/node_modules/maxmin/node_modules/gzip-size/node_modules/concat-stream/node_modules/readable-stream/node_modules/util-deprecate/LICENSE"
      },
      "utile@0.2.1"                        : {
        "licenses"   : "MIT*",
        "repository" : "http://github.com/flatiron/utile",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/http-proxy/node_modules/utile/LICENSE"
      },
      "utils-merge@1.0.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jaredhanson/utils-merge",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/utils-merge/LICENSE"
      },
      "uuid@2.0.1"                         : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/shtylman/node-uuid",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/buffer-to-vinyl/node_modules/uuid/LICENSE.md"
      },
      "vary@1.0.0"                         : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jshttp/vary",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/express/node_modules/vary/LICENSE"
      },
      "vhost@3.0.0"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/expressjs/vhost",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-connect/node_modules/connect/node_modules/vhost/LICENSE"
      },
      "vinyl-fs@1.0.0"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/wearefractal/vinyl-fs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/vinyl-fs/LICENSE"
      },
      "vinyl@0.4.6"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/wearefractal/vinyl",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/buffer-to-vinyl/node_modules/vinyl/LICENSE"
      },
      "websocket-driver@0.5.2"             : {
        "licenses"  : "MIT",
        "repository": "https://github.com/faye/websocket-driver-node"
      },
      "websocket-extensions@0.1.1"         : {
        "licenses"  : "MIT",
        "repository": "https://github.com/faye/websocket-extensions-node"
      },
      "whet.extend@0.9.9"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/Meettya/whet.extend",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-svgmin/node_modules/svgo/node_modules/whet.extend/LICENSE"
      },
      "which@1.0.9"                        : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/node-which",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/which/LICENSE"
      },
      "which@1.1.1"                        : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/isaacs/node-which",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/which/LICENSE"
      },
      "win-release@1.0.0"                  : {
        "licenses"  : "MIT",
        "repository": "https://github.com/sindresorhus/win-release"
      },
      "window-size@0.1.0"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/jonschlinkert/window-size",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/uglify-js/node_modules/yargs/node_modules/window-size/LICENSE-MIT"
      },
      "window-size@0.1.1"                  : {
        "licenses"   : "MIT",
        "repository" : "git+https://github.com/jonschlinkert/window-size",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/sass-graph/node_modules/yargs/node_modules/window-size/LICENSE"
      },
      "wiredep@0.4.2"                      : {
        "licenses"  : "MIT",
        "repository": "https://github.com/stephenplusplus/wiredep"
      },
      "wiredep@2.2.2"                      : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/taptapship/wiredep",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-wiredep/node_modules/wiredep/LICENSE"
      },
      "wordwrap@0.0.2"                     : {
        "licenses"  : "MIT/X11",
        "repository": "https://github.com/substack/node-wordwrap"
      },
      "wordwrap@0.0.3"                     : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/substack/node-wordwrap",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/wordwrap/LICENSE"
      },
      "wrappy@1.0.1"                       : {
        "licenses"   : "ISC",
        "repository" : "https://github.com/npm/wrappy",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/istanbul/node_modules/once/node_modules/wrappy/LICENSE"
      },
      "wrench@1.5.8"                       : {
        "licenses"   : "MIT",
        "repository" : "https://ryanmcgrath@github.com/ryanmcgrath/wrench-js",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/angular-jsdoc/node_modules/jsdoc/node_modules/wrench/LICENSE"
      },
      "xdg-basedir@1.0.1"                  : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/sindresorhus/xdg-basedir",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-google-cdn/node_modules/bower/node_modules/configstore/node_modules/xdg-basedir/license"
      },
      "xmlhttprequest@1.4.2"               : {
        "licenses"  : "MIT",
        "repository": "https://github.com/driverdan/node-XMLHttpRequest"
      },
      "xtend@3.0.0"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/Raynos/xtend",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-imagemin/node_modules/imagemin/node_modules/stream-combiner2/node_modules/through2/node_modules/xtend/LICENCE"
      },
      "xtend@4.0.0"                        : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/Raynos/xtend",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/xtend/LICENCE"
      },
      "yargs@1.3.3"                        : {
        "licenses"   : "MIT/X11",
        "repository" : "http://github.com/chevex/yargs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-contrib-uglify/node_modules/uglify-js/node_modules/yargs/LICENSE"
      },
      "yargs@3.12.0"                       : {
        "licenses"   : "MIT",
        "repository" : "https://github.com/bcoe/yargs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-sass/node_modules/node-sass/node_modules/sass-graph/node_modules/yargs/LICENSE"
      },
      "yargs@3.5.4"                        : {
        "licenses"   : "MIT/X11",
        "repository" : "http://github.com/bcoe/yargs",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/grunt-angular-templates/node_modules/html-minifier/node_modules/uglify-js/node_modules/yargs/LICENSE"
      },
      "zeparser@0.0.5"                     : {
        "licenses"   : "MIT*",
        "repository" : "https://github.com/qfox/ZeParser",
        "licenseFile": "/Users/lomelchenko/Documents/Projects/REX/node_modules/karma/node_modules/socket.io/node_modules/socket.io-client/node_modules/active-x-obfuscator/node_modules/zeparser/LICENSE"
      }
    };

    function init() {
      vm.licensesList = objToArray(licensesList);

      console.log(vm.licensesList);
    }

    function objToArray(object) {

      var data;

      data = Object.keys(object).map(function (k) {
        object[k].myKey = k;
        if(object[k].licenseFile){
          var newFileName = object[k].licenseFile.split('/REX/');
          if(newFileName[1]){
            object[k].licenseFile = newFileName[1];
          }
        }

        return object[k];
      });

      return data;
    }

    vm.switchOrder = function(){
      if (vm.order === '-licenses'){
        vm.order = 'licenses';
      } else {
        vm.order = '-licenses';
      }

    };

    init();

  }

})();
