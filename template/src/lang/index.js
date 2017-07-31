import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// Import i18n configuration
import * as config from './config.js';

Vue.config.lang = config.defaultLang;
Vue.config.fallbackLang = config.fallbackLang;

// Import locales
import messages from './locales';

// Create i18n instance
const i18n = new VueI18n({
    locale: config.defaultLang,
    messages
});

export default i18n;
