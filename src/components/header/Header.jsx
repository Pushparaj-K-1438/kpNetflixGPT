import { HEADER_LOGO } from "../../utils/image"
import { auth } from "../../utils/firebase"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react'
import { login, logout } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'


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
    <div className="flex justify-between p-4 items-center">
      <img className="flex h-fit w-28" src={HEADER_LOGO} alt="Logo Image" />
      {
        user &&
        <div className="flex gap-3 items-center">
          <p className="font-bold text-lg uppercase">{user.displayName}</p>
          <button className="h-fit bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleSignout}>Signout</button>
        </div>
      }
    </div>
  )
}

export default Header