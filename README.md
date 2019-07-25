# electron-rct-rdx-wbpck-boilerplate

[![dependencies Status](https://david-dm.org/akondratsky/electron-rct-rdx-wbpck-boilerplate/status.svg)](https://david-dm.org/akondratsky/electron-rct-rdx-wbpck-boilerplate)
[![devDependencies Status](https://david-dm.org/akondratsky/electron-rct-rdx-wbpck-boilerplate/dev-status.svg)](https://david-dm.org/akondratsky/electron-rct-rdx-wbpck-boilerplate?type=dev)

A boilerplate that I like little more. It is intended to get started with [Electron](http://electron.atom.io/), [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/) and [Webpack](https://webpack.js.org)

Here you'll find something from the [parent repository](https://github.com/jschr/electron-react-redux-boilerplate) and something more:

* [React Router](https://reacttraining.com/react-router/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk/)
* [Redux Actions](https://github.com/acdlite/redux-actions/)
* [Redux Local Storage](https://github.com/elgerlambert/redux-localstorage/)
* [Electron Packager](https://github.com/electron-userland/electron-packager)
* [Electron DevTools Installer](https://github.com/MarshallOfSound/electron-devtools-installer)
* [Mocha](https://mochajs.org)
* [Reselect](https://github.com/reduxjs/reselect)
* [Material-UI](https://material-ui.com/ru/)

## Quick start

Clone the repository
```bash
git clone --depth=1 https://github.com/akondratsky/electron-rct-rdx-wbpck-boilerplate

cd electron-rct-rdx-wbpck-boilerplate

npm install
```

Development
```bash
npm start
```

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Packaging

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-builder/wiki/Options.

Create a package for OSX, Windows and Linux
```
npm run pack
```

Or target a specific platform
```
npm run pack:mac
npm run pack:win
npm run pack:linux
```

## Tests

```
npm run test
```

## Updating snapshots
```
npm run test:update
```
or
```
npm run test -- --update
```
## Test coverage
```
npm run coverage
```
Collecting coverage for all files in ```coverage/lcov-report/index.html``` file.