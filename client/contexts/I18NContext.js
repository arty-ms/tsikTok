import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import enTranslations from '../assets/translations/en.json';
import ruTranslations from '../assets/translations/ru.json';
import settings from '../config/settings';

const namespace = 'translation';

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: settings.DefaultLocal,
  fallbackLng: settings.FallbackLocal,
  ns: [namespace],
  defaultNS: namespace,
  debug: false,
  resources: {
    en: {[namespace]: enTranslations},
    ru: {[namespace]: ruTranslations},
  },
  react: {
    useSuspense: false,
  },
});

const I18NContext = React.createContext({
  language: settings.DefaultLocal,
  setLanguage: () => {},
});

export const I18NApp = ({children}) => {
  const [language, setLanguage] = useState(settings.DefaultLocal);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <I18nextProvider i18n={i18n}>
      <I18NContext.Provider value={{
        language,
        setLanguage,
      }}>
        {children}
      </I18NContext.Provider>
    </I18nextProvider>
  );
};

I18NApp.propTypes = {
  children: PropTypes.node,
};

export default I18NContext;
