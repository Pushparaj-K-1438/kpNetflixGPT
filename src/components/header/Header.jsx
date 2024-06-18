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
import lang from "../../utils/languageConstants"


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  }
  const handleGptPage = () => {
    dispatch(togglePage());
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
          <select>
            <option value="en">English</option>
            <option value="kannada">Kannada</option>
            <option value="tamil">Tamil</option>
          </select>
          <p className="font-bold text-lg uppercase text-white cursor-pointer" onClick={handleGptPage}> {lang.tamil.gptSearchHead}</p>
          <p className="font-bold text-lg uppercase text-white">{user.displayName}</p>
          <button className="h-fit bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleSignout}>{lang.tamil.signOutTxt}</button>
        </div>
      }
    </div>
  )
}

export default Header