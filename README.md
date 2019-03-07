# RNSimple_boilerplate
Basic boilerplate for react-native project

## Included
* React & React Native
* React Navigation
* Redux
* Redux Thunk
* Redux Persist & redux-persist-transform-immutable 
* Immutable
* i18next & react-i18next
* Babel & Plugins: @babel/plugin-proposal-decorators
* Remote Redux DevTools

## Installation

Make sure you already install [requirements](https://facebook.github.io/react-native/docs/getting-started) tools.

#### Setup on your machine

```bash
$ git clone https://github.com/MrHazimAli/RNSimple_boilerplate.git
$ cd RNSimple_boilerplate
$ rm -rf .git

# Install Dependencies
$ yarn
```

## Development

#### start local server

```bash
$ react-native start
```

#### IOS
```bash
$ react-native run-ios
```

#### Android
```bash
$ react-native run-android
```

## DevTools

You can install [React Native Debugger](https://github.com/jhen0409/react-native-debugger) as default debugger.

## Translation
If you need to add more translation file you can add new json file inside resources folder and import the file on i18n.js inside root of src folder. this is example of multi-file translation

```bash
import translationEN from './resources/en.json'
import translationMY from './resources/my.json'

const resources = {
  en: { translation: translationEN },
  my: { translation: translationMY }
};
```

## License

MIT
