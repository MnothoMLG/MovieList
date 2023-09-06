import { I18n } from 'i18n-js';

const translations = {
  en: {
    noResults: ' No results. Please refine your search',
  },
};
const i18n = new I18n(translations);

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;

export default i18n;
