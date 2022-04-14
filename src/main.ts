import { createApp } from "vue";
import { createI18n } from 'vue-i18n'
import App from "./App.vue";
import router from "./router";
import "./index.css";
import en from "./locales/en.json";
import zhTW from "./locales/zh-TW.json";

const app = createApp(App);

app.use(router);

// 設置 i18n
let defaultLocale = 'zh-TW';
if(navigator.languages !== undefined && navigator.languages[0]){
  defaultLocale = navigator.languages[0];
}
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-TW': zhTW,
    en
  }
});
app.use(i18n)

app.mount("#app");
