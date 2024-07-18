import { HEADER_LOGO } from "../../utils/image"
import { auth } from "../../utils/firebase"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from 'react'
import { login, logout } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import { togglePage } from "../../redux/gptSlice"
import languages from "../../utils/languageConstants"
import { SUPPORTED_LANGUAGES } from "../../utils/movieConstants"
import { setLang } from "../../redux/configSlice"


const Header = () => {
  const [toggleMobleMenu, setToggleMobileMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const selectedLanguage = useSelector(store => store.config.lang);
  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  }
  const handleGptPage = () => {
    dispatch(togglePage());
  }
  const handleLanguage = (e) => {
    dispatch(setLang(e.target.value));
  }
  const toggleMenu = () =>{
    setToggleMobileMenu(!toggleMobleMenu);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(login({ uid: uid, email: email, displayName: displayName }));
        navigate("/movies");
      } else {
        dispatch(logout());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  return (
    <header className="relative bg-transparent text-white z-50 bg-gradient-to-b from-black to-transparentf">
      <nav
        className="mx-auto flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">FilmFolio</span>
            <img
              className="flex h-fit w-28"
              src={HEADER_LOGO}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden" onClick={toggleMenu}>
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
        </div>
        {
          user &&
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
            <select onChange={handleLanguage} className="bg-transparent border-none outline-none">
              {
                SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier}>{language.name}</option>)
              }
            </select>
            <a href="#" className="text-sm font-semibold leading-6 text-white" onClick={handleGptPage}>{languages[selectedLanguage].gptSearchHead}</a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">{user.displayName}</a>
            <a href="#" className="text-sm font-semibold leading-6 text-white"onClick={handleSignout}>{languages[selectedLanguage].signOutTxt} <span aria-hidden="true">→</span></a>
          </div>
        }
      </nav>
      <div className={`${toggleMobleMenu ? 'block' : 'hidden'} lg:hidden`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex flex-col">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">FilmFolio</span>
              <img
                className="h-8 w-auto"
                src={HEADER_LOGO}
                alt=""
              />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {
            user &&
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <select onChange={handleLanguage} className="block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full">
                    {
                      SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier}>{language.name}</option>)
                    }
                  </select>
                  <a
                    href="#"
                    className="block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleGptPage}>{languages[selectedLanguage].gptSearchHead}
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                  {user.displayName}
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="block rounded-lg py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleSignout}>
                  {languages[selectedLanguage].signOutTxt}
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </header>
  )
}

export default Header