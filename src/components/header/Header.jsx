import { HEADER_LOGO } from "../../utils/image"
import { auth } from "../../utils/firebase"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useSelector } from "react-redux"

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <div className="flex justify-between p-4 items-center">
      <img className="h-28" src={HEADER_LOGO} alt="Logo Image" />
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