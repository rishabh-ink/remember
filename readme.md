# Remember

> An app to help you remember the stuff you did.

[![Build Status](https://travis-ci.org/rishabhsrao/remember.svg "Build status")](https://travis-ci.org/rishabhsrao/remember) [![Dependency status (npm)](https://david-dm.org/rishabhsrao/remember.svg "Dependency status (npm)")](https://david-dm.org/rishabhsrao/remember) [![Code Climate](http://img.shields.io/codeclimate/github/rishabhsrao/remember.svg "Code Climate")](https://codeclimate.com/github/rishabhsrao/remember) [![Coverage status](https://img.shields.io/coveralls/rishabhsrao/remember.svg "Coverage status")](https://coveralls.io/r/rishabhsrao/remember) [![License](http://img.shields.io/badge/license-MIT-blue.svg "License")](license.md)

## :rowboat: Getting started

This is a NodeJS-based project. Ensure that you have NodeJS v0.10.29+.

:point_up: **Protip** Use [nvm](https://github.com/creationix/nvm) for easy management of NodeJS installations.

```
git clone git@github.com:rishabhsrao/remember.git
cd remember
npm install
./node_modules/.bin/bower install
./node_modules/.bin/gulp serve && say awesome # Only on Mac OSX; use espeak on GNU/Linux. Windows users, sorry, no awesomeness for you!
```

:warning: **Firewall issues**

Downloading dependencies over `git://` may be blocked if you are behind a firewall. The solution is to configure Git to use `https://` instead of `git://`. Run the following to force Git to use HTTPS:

```
git config url.https://.insteadOf git://
# Undo using git config unset url.https://
```


### :high_brightness: Updating the code

* Use `git pull --rebase` to update your code.
* Run `bundle install && npm install && bower install` to account for any newly added/updated/removed packages.


### :pencil2: Build tasks

The following build tasks are available:

* **clean**: Deletes everything in the `dist` directory.
* **script:lint**: Lints the JavaScript files. Uses `.jshintrc` for configuration.
* **script:test** (depends on **script:lint**): Runs the unit tests.
* **script:test:report:coveralls**: Sends test coverage data to *Coveralls.io*. Uses [Istanbul](http://gotwarlost.github.io/istanbul).
* **script:minify** (depends on **test**): Minifies the JavaScript files.
* **serve**: Runs a BrowerSync session for live-reload-enabled development.
* **build**: Creates a distributable version of the app in the `dist` directory.


# Contributing

1. Fork and clone this repo
2. Create your feature branch: `git checkout -b my-awesome-feature`
3. Commit your changes: `git commit -m "Add awesome feature"`
4. Push to the branch: `git push origin my-awesome-feature`
5. Submit a pull request


### :scroll: License

[MIT license](license.md) &copy; [Rishabh Rao](http://rishabhsrao.github.io).

---
