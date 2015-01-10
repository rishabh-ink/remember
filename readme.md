# Remember [:star:](http://remember-rishabhsrao.herokuapp.com/dist)

> An app to help you remember the stuff you did.

[![Travis](https://img.shields.io/travis/rishabhsrao/remember.svg?style=flat-square "Build status")](https://travis-ci.org/rishabhsrao/remember)
[![David](https://img.shields.io/david/rishabhsrao/remember.svg?style=flat-square "Dependency status (Node modules)")](https://david-dm.org/rishabhsrao/remember)
[![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg?style=flat-square "Dependency status (Ruby gems)")](https://gemnasium.com/rishabhsrao/remember)
[![Code Climate](https://img.shields.io/codeclimate/github/rishabhsrao/remember.svg?style=flat-square "Code Climate status")](https://codeclimate.com/github/rishabhsrao/remember)
[![Coveralls](https://img.shields.io/coveralls/rishabhsrao/remember.svg?style=flat-square "Test coverage status")](https://coveralls.io/r/rishabhsrao/remember)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square "MIT license &copy; Rishabh Rao")](license.md)

---

## :rowboat: Get started

This project depends on the following tools:

* [Node.js](http://nodejs.org)
* [Ruby](https://www.ruby-lang.org)
* [Bundler](http://bundler.io) gem

:tophat: **Tip** Use [nvm](https://github.com/creationix/nvm) and [rvm](http://rvm.io) for easy management of NodeJS and Ruby installations.

```
git clone git@github.com:rishabhsrao/remember.git
cd remember
npm install
bundle install
./node_modules/.bin/bower install
./node_modules/.bin/gulp serve && say awesome # Only on Mac OSX; use espeak on GNU/Linux. Windows users, sorry, no awesomeness for you!
```

:tophat: **Tip** If you have global installations of `bower` and `gulp`, then you can avoid typing the `./node_modules/.bin/` bit.

:tophat: **Tip** Downloading dependencies over `git://` may be blocked if you are behind a firewall. The solution is to configure Git to use `https://` instead of `git://`. Run the following to force Git to use HTTPS:

```
git config url.https://.insteadOf git://
# Undo using git config unset url.https://
```


## :nut_and_bolt: Build

This project is built using [Gulp](http://gulpjs.com). The following build tasks are available:

* **style:lint** Lints the Sass files using [SCSS-Lint](https://github.com/causes/scss-lint).
* **style:compile** Compiles the Sass files using [Compass](http://compass-style.org).
* **script:lint** Lints the JavaScript files using [JSHint](https://github.com/jshint/jshint).
* **script:test** Runs the JavaScript unit tests and generates a code coverage report using [Karma](http://karma-runner.github.io) and [Jasmine](http://jasmine.github.io).
* **script:minify** Minifies the JavaScript files using [UglifyJS](http://github.com/mishoo/UglifyJS).
* **image:minify** Compresses the image files using [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin).
* **markup:build** Optimizes JavaScript and CSS references in the HTML using [Useref](www.npmjs.org/package/useref-file).
* **markup:minify** Optimizes HTML imports and minifies the HTML using [Vulcanize](https://github.com/polymer/vulcanize).
* **serve** Starts a web server with live-reload support using [BrowserSync](http://www.browsersync.io).
* **build** Creates a build artifact, ready for deployment.
* **source** Includes the source files in the build artifact.
* **clean** Cleans the build artifact and any other generated artifacts.

You can run a task using `./node_modules/.bin/gulp {{task-name}}`.

:tophat: **Tip** It's a good idea to occasionally run:

```
git gc
npm prune && npm install
bower prune && bower install
bundle clean --force && bundle install
```

... to keep your repository lean and mean.


## :deciduous_tree: Contribute

Your pull-requests and [suggestions](https://github.com/rishabhsrao/remember/issues) are most welcome! Please following the step below to send a pull-request:

1. Fork and clone this repo
2. Create your feature branch: `git checkout -b my-awesome-feature`
3. Commit your changes: `git commit -m "Add awesome feature"`
4. Push to the branch: `git push origin my-awesome-feature`
5. Submit a pull request

:tophat: **Tip** Use `git pull --rebase` while pull the code to avoid the [merge commit](http://kernowsoul.com/blog/2012/06/20/4-ways-to-avoid-merge-commits-in-git).


## :rocket: Deploy

This project is continuously deployed to [Heroku](http://remember-rishabhsrao.herokuapp.com/dist) using a [NodeJS](https://github.com/heroku/heroku-buildpack-nodejs) [buildpack](https://devcenter.heroku.com/articles/buildpacks) by [Travis](https://travis-ci.org/rishabhsrao/remember), whenever a new tag is pushed. This was configured using the [Heroku toolbelt](https://toolbelt.heroku.com):

```
heroku create remember-rishabhsrao
git push heroku master
heroku ps:scale web=1
heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs#v63
```

:tophat: **Tip** The non-minified version of this project is also deployed to [Heroku at /app](http://remember-rishabhsrao.herokuapp.com/app).


## :scroll: License

[MIT license](license.md) &copy; [Rishabh Rao](http://rishabhsrao.github.io).

---
