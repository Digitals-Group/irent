'use client';

import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('HomePage');

  const changeLanguage = (locale: string) => {
    Cookies.set('locale', locale);
    window.location.reload();
  };
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('uz')}>Uzbek</button>
      <h1>{t('title')}</h1>
    </div>
  );
};

export default Header;
