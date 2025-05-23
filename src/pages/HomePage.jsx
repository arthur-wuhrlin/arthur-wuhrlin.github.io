import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h1 className="text-title" dangerouslySetInnerHTML={{ __html: t('title') }} />
      <h2>{t('subtitle')}</h2>
    </div>
  );
};

export default HomePage;
