import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { crx } from 'rollup-plugin-chrome-extension'
import zip from "rollup-plugin-zip"

import manifest from './src/manifest.json'
import pkg from './package.json'

const isProd = process.env.NODE_ENV === "production"

const crxOptions = {
  manifest: Object.assign(manifest, { 
    name: pkg.displayName || pkg.name, 
    version: pkg.version,
    description: pkg.description
  })
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [vue(), crx(crxOptions), isProd && zip({ dir: "releases" })]
})
