import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text">{t('pages.about.wip')}</h2>
    </div>
  );
};

export default AboutPage;
