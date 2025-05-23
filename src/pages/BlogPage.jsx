import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text">{t('pages.blog.wip')}</h2>
    </div>
  );
};

export default BlogPage;
