import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home":"Home",
      "about":"About",
      "skills":"Skills",
      "projects":"Projects",
      "contacts":"Contact",
      "copyright":"© 2023 All rights reserved.",
      "made-by":"Made by Charbel MEHOU",
      "view-here":"View here",
      "github-view-here":"Github repository here",
      "welcome":'Welcome to my Web portfolio  ! ',
      "me-1": "I'm a Student in Digital Services Engineering",
      "me-1-1":"passionate about ", 
      "eager":"and eager for",
      "programming":"programming ",
      "digital-innovation":"digital innovation",
      "me-2": "Specialized in",
      "me-2-1": "full-stack development",
      "me-3": "my skill set",
      "me-3-1": "ranges from front-end to back-end, with expertise in",
      "me-4":"Hi ! I'm ",
      "me-5":"Charbel MEHOU",
      "me-5-1":"a Developper",
      "projet":"Project",
      "myftjourney-d1": "An app providing traininig tips to help users train effectively",
      "myftjourney-d2": "to help users train effectively",
      "myportfolio-d1":"My Web portfolio is a gateway to my projects, their descriptions, previews, and their respective codes",      "myftjourney":'Training assistance platform',
      "myportfolio-d2":"Here you can have acces to my deployed projects",
      "web-portfolio":"Web Portfolio",
      "portfolio-d1":"On my web portfolio, explore my professional journey, skills, and a selection of my personal and academic projects. Some projects feature links to the deployed site and the associated GitHub repository. You'll also find my certifications and links to my online profiles, such as LinkedIn and GitHub, along with my contact details.",
      "interests":"Interests",
      'gmail':'Gmail',
      'github':'Github',
      'linkedIn':'LinkedIn',
      "contact-me":"Here is my links and contacts",
      "certifications":"Certifications",
      "certif-complete":"Course Completion Certificate of ",
      "and":"and",
      'management':'Project Management',
      'languages':'Technology',
      'logiciel':'Logiciel',
      'agile-methodology':'Agile Methodology',
      "infrastructur-sportive":"Census of Sports Infrastructures",
      "details-here":"Details here",
      "myftjourney-speech": "This project is a web app tailored to guide users through effective training exercises. Each exercise comes with clear descriptions and supportive YouTube videos. The platform also features tips for weight loss and muscle gain objectives.",
      "visit-here": "Visit the site",
      "back": "Back",
      "technology":'Technology',
      "infrastructures-sportives-speech": "This web app is a project that maps sporting structures across France through an interactive chart. Users can search for a specific facility and get its location as well as the associated town hall's location. Detailed information about the town halls is also provided.",
      'infrastructur-sportive-p1':"Website mapping French sports infrastructures with information from associated town halls",
      "club-sport-d1": "A web application designed to optimize access to data from sports federations and clubs in France",
      "club-sport": "Project: SportClubs",
      "club-sport-speech": "This is a web application aimed at simplifying access to data from sports federations and clubs in France. With it, users can access not only the data of the concerned federation/club but also charts representing gender distribution statistics within the club. It is also possible to obtain, through a histogram, the distribution of licensees by age groups ranging from 1 to 90 years old.",
      "not-deployed":"Not deployed ⚠️"
    }
  },
  fr: {
    translation: {
      "home":"Acceuil",
      "about":"À Propos",
      "skills":"Compétences",
      "projects":"Projets",
      "contacts":"Contacts",
      "copyright": "© 2023 Tous droits réservés.",
      "made-by": "Réalisé par Charbel MEHOU",
      "view-here":"Aperçu ici",
      "github-view-here":"Repository Github ici ",
      "me-1":"Je suis un étudiant en Ingénierie des Services du Numérique",
      "me-1-1": "passionné de ",
      "eager":"et avide d'",
      "programming": "programmation ",
      "digital-innovation": "Innovation numérique",  
      "me-2":"Spécialisé en  ",
      "me-2-1":"développement full-stack",
      "me-3":" ma palette de compétences " ,
      "me-3-1":"s'étend du front-end au back-end, avec une expertise en",
      "me-4":"Bonjour , je suis",
      "me-5":"Charbel MEHOU",
      "me-5-1":" Développeur",
      "welcome":'Bienvenue sur mon portfolio web ! ',
      "projet":"Projet",
      "myftjourney-d1":"Une application fournissant des conseils pour aider les utilisateurs à s'entraîner efficacement",
      "myportfolio-d1":"Mon Web portfolio est un portail vers mes projets, leurs descriptions, aperçus et leurs codes respectifs",
      "web-portfolio":"Web Portfolio",
      "portfolio-d1":"Sur mon portfolio web, découvrez mon parcours professionnel, mes compétences et une sélection de mes projets personnels et académiques. Certains projets comprennent des liens vers le site déployé et le repository GitHub associé. Vous y trouverez également mes certifications et des liens vers mes profils en ligne, tels que LinkedIn et GitHub, ainsi que mes coordonnées",
      "interests":"Centres d'intérêt",
      'gmail':'Gmail',
      'github':'Github',
      'linkedIn':'LinkedIn',
      "contact-me":"Voici mes Liens et Contacts",
      "certifications":"Certifications",
      "certif-complete":"Certificat de complétion de cours de",
      "myftjourney":'Plateforme d\'aide à l\'entrainement',
      "and":'et',
      'management':'Gestion de Projet',
      'languages':'Technologies',
      'logiciel':'Logiciel',
      'agile-methodology':' Méthode Agile',
      "infrastructur-sportive":"Reçensement des Infrastructures Sportives",
      'infrastructur-sportive-p1':"Site web cartographiant les infrastructures sportives françaises avec les informations des mairies associées",
      "details-here":"Details ici",
      "myftjourney-speech": "Ce projet est une application web conçue pour guider les utilisateurs à travers des exercices d'entraînement efficaces. Chaque exercice est accompagné de descriptions claires et de vidéos YouTube explicatives. La plateforme propose également des astuces pour les objectifs de perte de poids et de prise de muscle.",
      "visit-here":"Visiter le site",
      "back":"Retour",
      "technology":'Technologies',
      "infrastructures-sportives-speech": "C'est une application web qui permet de localiser les structures sportives en France via une carte interactive. Les utilisateurs peuvent rechercher une infrastructure spécifique et obtenir sa localisation ainsi que celle de la mairie associée. Des informations détaillées sur les mairies sont également disponibles.",
      "club-sport-d1": "Une application web visant à optimiser l'accès aux données des fédérations et clubs sportifs de France",
      "club-sport": "Projet : SportClubs",
      "club-sport-speech": "C'est une application web qui vise à simplifier l'accès aux données des fédérations et clubs sportifs en France. Grâce à elle, un utilisateur est capable d'avoir accès non seulement aux données de la fédération/club concerné(e) mais aussi à des graphiques représentant les statistiques de répartition homme-femme dans le club. Il est aussi possible d'obtenir, via un histogramme, la répartition des licenciés suivant des tranches d'âges allant de 1 à 90 ans.",
      "not-deployed":"Non déployé ⚠️"
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
