import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('WELCOME_PAGE_TITLE')}
    </div>
  );
};

export default Home;
