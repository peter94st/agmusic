
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "../locales/es/translation.json";
import en from "../locales/en/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },

    lng: localStorage.getItem("nocturn-language") || "es",

    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });

// Guardar el idioma seleccionado
i18n.on("languageChanged", (language) => {
  localStorage.setItem("nocturn-language", language);
});

export default i18n;
