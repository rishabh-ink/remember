# Remember

> An app to help you remember the stuff you did.


## :rowboat: Getting started

**Remember** depends on the following tools...

* [Node.js](http://nodejs.org)
* [Ruby](https://www.ruby-lang.org)
* [Bundler](http://bundler.io) gem
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

Once they are installed, run...

```
git clone git@github.com:rishabhsrao/remember.git
cd remember
bundle install && npm install && bower install && gulp build
say awesome                             # Only on Mac OS X; use espeak on GNU/Linux. Windows users, sorry, no awesomeness for you!
```

:warning: Notes:

* Downloading Bower dependencies over `git://` may be blocked if you are behind a firewall.
  * The solution is to configure Git to use `https://` instead of `git://`.
  * Run `git config url.https://.insteadOf git://` to force Git to use HTTPS.
* In a CI environment, add an environment variable, `REMEMBER_APP_CI="true"`. A few Gulp tasks depend on the existence of this variable. (Optional, but recommended.)

Once done, the `dist` directory will have the built artifacts.


### :high_brightness: Updating your codebase

* Use `git pull --rebase` to update your codebase.
* :warning: Run `bundle install && npm install && bower install` after a `git pull --rebase` to ensure that any newly added packages are installed.


### :dart: Gulp tasks

The following tasks are available...

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

---
