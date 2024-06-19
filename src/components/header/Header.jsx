import { HEADER_LOGO } from "../../utils/image"
import { auth } from "../../utils/firebase"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react'
import { login, logout } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import { togglePage } from "../../redux/gptSlice"
import languages from "../../utils/languageConstants"
import { SUPPORTED_LANGUAGES } from "../../utils/movieConstants"
import { setLang } from "../../redux/configSlice"


const Header = () => {
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
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(login({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(logout());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  return (
    <div className="flex justify-between p-4 items-center relative z-20 bg-gradient-to-b from-black to-transparent">
      <img className="flex h-fit w-28" src={HEADER_LOGO} alt="Logo Image" />
      {
        user &&
        <div className="flex gap-3 items-center">
          <select onChange={handleLanguage}>
          {
            SUPPORTED_LANGUAGES.map(language => <option key={language.identifier} value={language.identifier}>{language.name}</option>)
          }
          </select>
          <p className="font-bold text-lg uppercase text-white cursor-pointer" onClick={handleGptPage}> {languages[selectedLanguage].gptSearchHead}</p>
          <p className="font-bold text-lg uppercase text-white">{user.displayName}</p>
          <button className="h-fit bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleSignout}>{languages[selectedLanguage].signOutTxt}</button>
        </div>
      }
    </div>
  )
}

export default Header