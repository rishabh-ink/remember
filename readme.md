# Remember

> An app to help you remember the stuff you did.

[![Build Status](https://travis-ci.org/rishabhsrao/remember.svg "Build status")](https://travis-ci.org/rishabhsrao/remember) [![Dependency status (npm)](https://david-dm.org/rishabhsrao/remember.svg "Dependency status (npm)")](https://david-dm.org/rishabhsrao/remember) [![Dependency status - bundler](https://gemnasium.com/rishabhsrao/remember.png "Dependency status (bundler)")](https://gemnasium.com/rishabhsrao/remember) [![Code Climate](http://img.shields.io/codeclimate/github/rishabhsrao/remember.svg "Code Climate")](https://codeclimate.com/github/rishabhsrao/remember) [![Coverage status](https://img.shields.io/coveralls/rishabhsrao/remember.svg "Coverage status")](https://coveralls.io/r/rishabhsrao/remember) [![License](http://img.shields.io/badge/license-MIT-blue.svg "License")](license.md)

## :rowboat: Getting started

**Remember** depends on the following tools:

* [Node.js](http://nodejs.org)
* [Ruby](https://www.ruby-lang.org)
* [Bundler](http://bundler.io) gem
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

:point_up: You can use [nvm](https://github.com/creationix/nvm), [rvm](https://rvm.io) and [Homebrew](http://brew.sh)/[Chocolatey](https://chocolatey.org) to manage their installations.

Once they are installed, run...

```
git clone git@github.com:rishabhsrao/remember.git
cd remember
bundle install && npm install && bower install && gulp build
say awesome # Only on Mac OS X; use espeak on GNU/Linux. Windows users, sorry, no awesomeness for you!
```


### Downloading dependencies behind a firewall

Downloading dependencies over `git://` may be blocked if you are behind a firewall. The solution is to configure Git to use `https://` instead of `git://`. Run the following to force Git to use HTTPS:

```
git config url.https://.insteadOf git://
# Undo using git config unset url.https://
```


### :high_brightness: Updating the code

* Use `git pull --rebase` to update your code.
* Run `bundle install && npm install && bower install` afterwards to account for any newly added/updated/removed packages.


### :pencil2: Build tasks

The following build tasks are available:

* **clean**: Deletes everything in the `dist` directory.
* **style:compile**: Compiles the Sass files.
* **style:lint**: Lints the Sass files.
* **script:lint**: Lints the JavaScript files. Uses `.jshintrc` for configuration.
* **script:test** (depends on **script:lint**): Runs the unit tests.
* **script:test:report:coveralls**: Sends test coverage data to *Coveralls.io*. Uses [Istanbul](http://gotwarlost.github.io/istanbul).
* **script:minify** (depends on **test**): Minifies the JavaScript files.
* **serve**: Runs a BrowerSync session for live-reload-enabled development.
* **build**: Creates a distributable version of the app in the `dist` directory.


### :rocket: Distributing

* Use `gulp build` to create a distributable version of the app in the `dist` directory.


### :scroll: License

**Remember** is licensed under the [MIT license](license.md).


---
