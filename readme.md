# Remember

> An app to help you remember the stuff you did.

[![Travis](https://img.shields.io/travis/rishabhsrao/remember.svg?style=flat-square "Build status")](https://travis-ci.org/rishabhsrao/remember)
[![David](https://img.shields.io/david/rishabhsrao/remember.svg?style=flat-square "Dependency status (Node modules)")](https://david-dm.org/rishabhsrao/remember)
[![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg?style=flat-square "Dependency status (Ruby gems)")](https://gemnasium.com/rishabhsrao/remember)
[![Code Climate](https://img.shields.io/codeclimate/github/rishabhsrao/remember.svg?style=flat-square "Code Climate status")](https://codeclimate.com/github/rishabhsrao/remember)
[![Coveralls](https://img.shields.io/coveralls/rishabhsrao/remember.svg?style=flat-square "Test coverage status")](https://coveralls.io/r/rishabhsrao/remember)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square "MIT license &copy; Rishabh Rao")](license.md)


## :rowboat: Get started

This project depends on the following tools:

* [Node.js](http://nodejs.org)
* [Ruby](https://www.ruby-lang.org)
* [Bundler](http://bundler.io) gem
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

:tophat: **Protip** Use [nvm](https://github.com/creationix/nvm) and [rvm](http://rvm.io) for easy management of NodeJS and Ruby installations.

```
git clone git@github.com:rishabhsrao/remember.git
cd remember
npm install
bundle install
./node_modules/.bin/bower install
./node_modules/.bin/gulp serve && say awesome # Only on Mac OSX; use espeak on GNU/Linux. Windows users, sorry, no awesomeness for you!
```

:fire: **Firewall issues** Downloading dependencies over `git://` may be blocked if you are behind a firewall. The solution is to configure Git to use `https://` instead of `git://`. Run the following to force Git to use HTTPS:

```
git config url.https://.insteadOf git://
# Undo using git config unset url.https://
```


## :nut_and_bolt: Build

The following build tasks are available:

* **clean** Deletes everything in the `dist` directory.
* **style:compile** Compiles the Sass files.
* **script:lint** Lints the JavaScript files. Uses `.jshintrc` for configuration.
* **script:test** Runs the unit tests.
* **script:test:report:coveralls** Sends test coverage data to *Coveralls.io*. Uses [Istanbul](http://gotwarlost.github.io/istanbul).
* **script:minify** Minifies the JavaScript files.
* **serve** Runs a BrowerSync session for live-reload-enabled development.
* **build** Creates a distributable version of the app in the `dist` directory.


## :deciduous_tree: Contribute

Your pull-requests and [suggestions](https://github.com/rishabhsrao/remember/issues) are most welcome! Please following the step below to send a pull-request:

1. Fork and clone this repo
2. Create your feature branch: `git checkout -b my-awesome-feature`
3. Commit your changes: `git commit -m "Add awesome feature"`
4. Push to the branch: `git push origin my-awesome-feature`
5. Submit a pull request


## :rocket: Deploy

This project is continuously deployed to [Heroku](http://remember-rishabhsrao.herokuapp.com) using a [NodeJS](https://github.com/heroku/heroku-buildpack-nodejs) [buildpack](https://devcenter.heroku.com/articles/buildpacks) by [Travis](https://travis-ci.org/rishabhsrao/remember), whenever a new tag is pushed. This was configured using the [Heroku toolbelt](https://toolbelt.heroku.com):

```
heroku create remember-rishabhsrao
git push heroku master
heroku ps:scale web=1
heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs
```


## :scroll: License

[MIT license](license.md) &copy; [Rishabh Rao](http://rishabhsrao.github.io).

---
