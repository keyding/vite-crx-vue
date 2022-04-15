# Vite Crx Vue

Chrome extension development template based on [Vite](https://github.com/vitejs/vite), [Vue.js](https://vuejs.org/) and [rollup-plugin-chrome-extension](https://github.com/extend-chrome/rollup-plugin-chrome-extension).

## Usage

```
$ npx degit keyding/vite-crx-vue new-project
```

Preferred package manager is [pnpm](https://pnpm.io/), but [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) should work.

### Install

```bash
# /new-project

# pnpm (recommend)
pnpm install

# npm
npm install

# yarn
yarn install
```

### Development

```bash
# The compiled directory is /dist. 
# Then add the extension to Chrome
pnpm dev
```

### Build

```bash
# build and zip. 
# The release directory is /releases
pnpm build
```

```bash
# bump version, build and zip.
# The release directory is /releases
pnpm release
```

## Features

- ✨ Vite HMR
- ✨ Zip your extension when you release with [rollup-plugin-zip](https://www.npmjs.com/package/rollup-plugin-zip)

For more please refer to [Vite](https://github.com/vitejs/vite), [Vue.js](https://vuejs.org/) and [rollup-plugin-chrome-extension](https://github.com/extend-chrome/rollup-plugin-chrome-extension).

**🙏 Thank to [Vite](https://github.com/vitejs/vite), [Vue.js](https://vuejs.org/) and [rollup-plugin-chrome-extension](https://github.com/extend-chrome/rollup-plugin-chrome-extension).**
