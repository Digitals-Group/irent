import { LanguageIcon } from '@/Icons';
import Cookies from 'js-cookie';

const LanguageSelection = () => {

  const langs = [
    {
      label: "ru",
    },
    {
      label: "uz",
    },
    {
      label: "en",
    },
  ]; 

  const handleChangeLang = (lang) => {
    Cookies.set('locale', lang);
    window.location.reload();
  };

  return (
      <div className="">
          <div className="">
            <span className="">en</span>
            <span className="">
              <LanguageIcon />
            </span>
          </div>

            <div className="">
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
