// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],
    typescript: {
        typeCheck: true
    },
    // css: [
    //   'element-plus/dist/index.css'
    // ],
    app: {
      baseURL: '/seaborn/',
      head: {
        title: 'seaborn',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'seaborn',
            name: 'seaborn',
            content: '以這座海港城市作為起點與歸屬，航向世界、航向未知，以不怕犯難的冒險精神前行，這也是刊物取名《seaborn》的由來。'
          },
          { hid: 'og:image' , property: 'og:image' , content: 'logo.png'},
        ],
        
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/seaborn/favicon.ico' }]
      }
    },
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: ''
          }
        }
      }
    },
    i18n: {
        defaultLocale: 'zh',
        langDir: 'locales',
        locales: [
          { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
          { code: 'zh', file: 'zh.json', iso: 'zh-TW', name: '繁體中文' }
        ],
        strategy: 'no_prefix',
        vueI18n: {
          legacy: false
        }
    }
})
