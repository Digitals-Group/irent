'use client';

import { Search } from '@/components/Search';
import { Container } from '@mui/material';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('HomePage');

  const changeLanguage = (locale: string) => {
    Cookies.set('locale', locale);
    window.location.reload();
  };
  return (
    <Container>
      <header className="flex items-center justify-between">
        <h1>Digital solution</h1>
        <Search />
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('uz')}>Uzbek</button>
          <h1>{t('title')}</h1>
        </div>
      </header>
    </Container>
  );
};

export default Header;
