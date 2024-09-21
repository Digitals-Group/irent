import { LanguageIcon } from '@/Icons';
import Cookies from 'js-cookie';
import { FC } from 'react';

const LanguageSelection: FC = () => {
  const langs = [
    {
      label: 'ru',
    },
    {
      label: 'uz',
    },
    {
      label: 'en',
    },
  ];

  const handleChangeLang = (lang: string) => {
    Cookies.set('locale', lang);
    window.location.reload();
  };

  return (
    <div className="group relative">
      <div className="cursor-pointer">
        <span className="">en</span>
        <span className="">
          <LanguageIcon />
        </span>
      </div>

      <div className="absolute z-30 hidden flex-col border border-red-500 bg-white p-5 group-hover:flex">
        {langs.map((lang) => (
          <div
            key={lang.label}
            className=""
            onClick={() => handleChangeLang(lang.label)}
          >
            <a className="">
              {lang.label}
              <span className=""></span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
