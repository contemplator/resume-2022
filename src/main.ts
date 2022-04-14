import { createApp } from "vue";
import { createI18n } from 'vue-i18n'
import App from "./App.vue";
import router from "./router";
import "./index.css";

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'zh-TW',
})

const app = createApp(App);

app.use(router);
app.use(i18n)
app.mount("#app");
