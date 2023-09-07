import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "about":"About",
      "skills":"Skills",
      "projects":"Project",
      "contacts":"Contact",
      "copyright":"© 2023 All rights reserved.",
      "made-by":"Made by Charbel MEHOU",
      "view-here":"View here",
      "github-view-here":"Github repository here"
    }
  },
  fr: {
    translation: {
      "about":"À Propos",
      "skills":"Compétences",
      "projects":"Projets",
      "contacts":"Contacts",
      "copyright": "© 2023 Tous droits réservés.",
      "made-by": "Réalisé par Charbel MEHOU",
      "view-here":"Appercu ici",
      "github-view-here":"Github repository ici "
      }
      
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
