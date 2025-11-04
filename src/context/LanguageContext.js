import React, { createContext, useState, useContext } from 'react';
import translations from '../translations/translations';

// Create the Language Context
const LanguageContext = createContext();

// Custom hook to use the Language Context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  // Toggle between English and French
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'));
  };

  // Get translation by key path (e.g., "navbar.home")
  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) {
        console.warn(`Translation key not found: ${keyPath}`);
        return keyPath; // Return the key if translation not found
      }
    }
    
    return value;
  };

  // Get category translation with fallback
  const getCategoryTranslation = (category) => {
    const categoryMap = {
      "men's clothing": language === 'en' ? "men's clothing" : "vêtements pour hommes",
      "women's clothing": language === 'en' ? "women's clothing" : "vêtements pour femmes",
      "jewelery": language === 'en' ? "jewelery" : "bijoux",
      "electronics": language === 'en' ? "electronics" : "électronique"
    };
    
    return categoryMap[category] || category;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    getCategoryTranslation
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

