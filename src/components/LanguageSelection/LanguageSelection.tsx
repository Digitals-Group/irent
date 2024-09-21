import { LanguageIcon } from '@/Icons';
import { EnLangIcon } from '@/Icons/EnLangIcon';
import { RuLangIcon } from '@/Icons/RuLangIcon';
import { UzLangIcon } from '@/Icons/UzLangIcon';
import Cookies from 'js-cookie';
import { FC, useState, useEffect } from 'react';

const LanguageSelection: FC = () => {
  const langs = [
    {
      label: 'ru',
      icon: <RuLangIcon />
    },
    {
      label: 'uz',
      icon: <UzLangIcon />
    },
    {
      label: 'en',
      icon: <EnLangIcon />
    },
  ];

  // eslint-disable-next-line no-undef
  const [selectedLang, setSelectedLang] = useState<{ label: string; icon: JSX.Element } | null>(null);

  useEffect(() => {
    const localeCookie = Cookies.get('locale') || 'en';
    const lang = langs.find((item) => item.label === localeCookie);
    setSelectedLang(lang || langs[2]); 
  }, []); 

  const handleChangeLang = (lang: string) => {
    Cookies.set('locale', lang);
    window.location.reload();
  };

  return (
    <div className="group relative">
      <div className="cursor-pointer flex items-center gap-1 border border-[#C3D4E9] p-1 rounded-md">
        <span className="">{selectedLang?.icon}</span> 
        <span className="uppercase text-lg font-medium">{selectedLang?.label}</span>
        <span>
          <LanguageIcon />
        </span>
      </div>

      <div className="absolute z-30 hidden flex-col bg-white p-2 group-hover:flex">
        {langs.map((lang) => (
          <div
            key={lang.label}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2"
            onClick={() => handleChangeLang(lang.label)}
          >
            <span>{lang.icon}</span> {/* Display the language icon */}
            <span className='uppercase text-md font-medium'>{lang.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
