// Example of Localization in React Native Multi Language App
// https://aboutreact.com/localization-in-react-native/

// import LocalizedStrings from "react-native-localization";
import { Localization } from "expo-localization";
import { I18n } from "i18n-js";

// const { Localization } = DangerZone;
const StringsOfLanguages = new I18n({
  hi: {
    first: "क्या हाल है ?",
    second: "मैं ठीक हूँ ?",
    "Emergency ward": "आपातकालीन कक्ष",
    Login: "लॉग इन करें",
    "Dont have an account?": "खाता नहीं है?",
    "Sign up": "साइन अप करें",
    "User Name or Email": "उपयोगकर्ता का नाम या ईमेल",
    Password: "कुंजिका",
    Home: "मुख्यपृष्ठ",
    "User Management": "उपयोगकर्ता प्रबंधन",
  },
  ja: { welcome: "こんにちは" },
  ma: {
    first: "तू कसा आहेस ?",
    second: "मी ठीक आहे ?",
    "Emergency ward": "आपत्कालीन प्रभाग",
    Login: "लॉगिन",
    "Dont have an account?": "खाते नाही?",
    "Sign up": "साइन अप करा",
    "User Name or Email": "वापरकर्तानाव किंवा ईमेल",
    Password: "पासवर्ड",
    Home: "मुख्यपृष्ठ",
    "User Management": "वापरकर्ता व्यवस्थापन",
  },
  en: {
    first: "How are You ?",
    second: "I am fine ",
    Login: "Login",
    "Dont have an account?": "Dont have an account?",
    "Sign up": "Sign up",
    "User Name or Email": "User Name or Email",
    Password: "Password",
    Home: "Home",
    "User Management": "User Management",
  },
  tl: {
    first: "comment allez vous",
    second: "je vais bien",
    "Emergency ward": "service d'urgence",
    Login: "ప్రవేశించండి",
    "Dont have an account?": "ఖాతా లేదా?",
    "Sign up": "చేరడం",
    "User Name or Email": "వాడుకపేరు లేదా ఈమెయిల్",
    Password: "పాస్వర్డ్",
    Home: "ఇల్లు",
    "User Management": "వాడుకరి నిర్వహణ",
  },
  gj: {
    first: "comment allez vous",
    second: "je vais bien",
    "Emergency ward": "service d'urgence",
    Login: "પ્રવેશ કરો",
    "Dont have an account?": "તમારી પાસે ખાતું નથી?",
    "Sign up": "સાઇન અપ કરો",
    "User Name or Email": "વપરાશકર્તા નામ અથવા ઇમેઇલ",
    Password: "પાસવર્ડ",
    Home: "ઘર",
    "User Management": "વપરાશકર્તા વ્યવસ્થાપન",
  },
  fr: {
    first: "comment allez vous",
    second: "je vais bien",
    "Emergency ward": "service d'urgence",
    Login: "connexion",
    "Dont have an account?": "Vous n'avez pas de compte ?",
    "Sign up": "S'inscrire",
    "User Name or Email": "Nom d'utilisateur ou email",
    Password: "Mot de passe",
    Home: "domicile",
    "User Management": "Gestion des utilisateurs",
  },
});

export default StringsOfLanguages;
