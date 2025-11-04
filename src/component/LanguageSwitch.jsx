import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-white hover:bg-orange-400 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
      aria-label="Switch language"
    >
      <span className="text-lg">{language === 'en' ? '🇬🇧' : '🇫🇷'}</span>
      <span className="font-semibold">{language === 'en' ? 'EN' : 'FR'}</span>
    </button>
  );
};

export default LanguageSwitch;

