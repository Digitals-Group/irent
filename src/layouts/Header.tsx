'use client';

import LanguageSelection from '@/components/LanguageSelection/LanguageSelection';
import { Search } from '@/components/Search';
import { LikeIcon } from '@/Icons';
import { NotificationIcon } from '@/Icons/NotificationIcon';
import { Container } from '@mui/material';

const Header = () => {
  return (
    <Container>
      <header className="flex items-center justify-between">
        <div className="flex w-full items-center justify-between border border-red-500">
          <h1>iRent</h1>
          <Search />
        </div>
        <div className='flex items-center gap-5'>
          <LanguageSelection />
          <span className='border border-[#C3D4E9] p-2 rounded-full cursor-pointer '><LikeIcon/></span>
          <div className='border border-[#C3D4E9] p-2 rounded-full cursor-pointer relative'>
            <span className='bg-[#FF4423] w-3 h-3 rounded-full absolute top-[-2px] right-[-2px]'></span>
            <NotificationIcon/>
          </div>
        </div>
        <div className=''>
        <img src="" alt="" />
        </div>
      </header>
    </Container>
  );
};

export default Header;
