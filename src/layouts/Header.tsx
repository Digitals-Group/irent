'use client';

import { Search } from '@/components/Search';
import { Container } from '@mui/material';
import { useTranslations } from 'next-intl';
import LanguageSelection  from '@/components/LanguageSelection/LanguageSelection'

const Header = () => {
  const t = useTranslations('HomePage');
  return (
    <Container>
      <header className="flex items-center justify-between">
        <div className='flex items-center justify-between w-full border border-red-500'>
          <h1>iRent</h1>
          <Search />
        </div>
        <div>
          <LanguageSelection/>
          <h1>{t('title')}</h1>
        </div>
      </header>
    </Container>
  );
};

export default Header;
