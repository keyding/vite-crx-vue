<script setup>
import { ref } from 'vue'
import ok from '~/assets/ok.png'
import ViteLogo from '~/assets/logos/vitejs-logo.svg'
import RPCELogo from '~/assets/logos/rollup-plugin-chrome-extension.png'
import VueLogo from '~/assets/logos/vuejs-logo.png'

const OKUrl = chrome.runtime.getURL(ok)
const ViteLogoUrl = chrome.runtime.getURL(ViteLogo)
const RPCELogoUrl = chrome.runtime.getURL(RPCELogo)
const VueLogoUrl = chrome.runtime.getURL(VueLogo)

const data = ref([
  {
    title: 'Vite',
    desc: 'Next Generation Frontend Tooling.',
    link: 'https://vitejs.dev',
    logo: ViteLogoUrl
  },
  {
    title: 'rollup-plugin-chrome-extension',
    desc: 'Build Chrome Extensions using Rollup, with minimal configuration.',
    link: 'https://www.extend-chrome.dev/rollup-plugin',
    logo: RPCELogoUrl 
  },
  {
    title: 'Vue.js',
    desc: 'An approachable, performant and versatile framework for building web user interfaces.',
    link: 'https://vuejs.org',
    logo: VueLogoUrl
  }
])
</script>

<template>
  <div class="container">
    <div class="card" v-for="card, idx in data" :key="idx">
      <img class="logo" :src="card.logo" :alt="card.title">
      <div class="info">
        <div class="title">
          <a :href="card.link" :title="card.title">{{ card.title }}</a>
        </div>
        <div class="desc">{{ card.desc }}</div>
      </div>
    </div>
    <div class="ok">
      <img :src="OKUrl" alt="OK">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 24px;
  background: #202124;

  .card {
    width: 400px;
    box-sizing: border-box;
    padding: 16px 20px;
    background-color: #292a2d;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 2px 6px 2px;
    display: flex;
    transition: height 300ms cubic-bezier(.25, .1, .25, 1);

    & + .card {
      margin-top: 12px;
    }

    .logo {
      width: 48px;
      height: 48px;
    }

    .info {
      font-size: 13px;
      box-sizing: border-box;
      padding-left: 24px;
      .title {
        color: #f4f4f4;
        line-height: 20px;

        a {
          color: #ff4530;
          text-decoration: none;
        }
      }
      .desc { 
        color: #9aa0a6;
        line-height: 20px;
        margin-top: 4px;
      }
    }
  }

  .ok {
    width: 400px;
    display: flex;
    justify-content: center;

    > img {
      width: 240px;
    }
  }
}
</style>
