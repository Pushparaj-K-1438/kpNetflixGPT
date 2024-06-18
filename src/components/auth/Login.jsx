import { useRef, useState } from 'react'
import { LOGIN_BG } from '../../utils/image'
import Header from '../header/Header'
import { validateAuthForm } from '../../validations/loginFormValidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  }
  const fullname = useRef(null);
  const userName = useRef(null);
  const password = useRef(null);
  const handleSubmit = () => {
    const message = validateAuthForm(userName.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, userName.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(login({ uid: uid, email: email, displayName: displayName }));
          }).catch((error) => {
            setErrorMessage(error);
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, userName.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(login({ uid: uid, email: email, displayName: displayName }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  }
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${LOGIN_BG})`, backgroundColor: 'rgba(51, 51, 51, 0.5)' }}
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="flex flex-col items-center justify-center text-white gap-3 px-8 text-center h-[calc(100%-77px)] relative">
        <Header />
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col gap-5 items-center justify-center p-14 bg-black bg-opacity-70 text-white w-96 rounded">
            <h2 className='text-2xl font-bold'>
              {
                isSignIn ? 'Sign In' : 'Sign Up'
              }
            </h2>
            <div className="flex flex-col gap-4 w-full">
              <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col gap-8">
                <div className='flex flex-col gap-3'>
                  {
                    !isSignIn &&
                    <input ref={fullname} type="text" name="" placeholder="Fullname" className="px-2 py-2 border border-red-900 rounded bg-transparent" />
                  }

                  <input ref={userName} type="text" name="" placeholder="Username" className="px-2 py-2 border border-red-900 rounded bg-transparent" />
                  <input ref={password} type="password" name="" placeholder="Password" className="px-2 py-2 border border-red-900 rounded bg-transparent" />
                  <p className='text-red-700 font-bold text-sm'>{errorMessage}</p>
                </div>
                <button type="submit" className='bg-red-800 flex items-center justify-center p-2 rounded' onClick={handleSubmit}>
                  {
                    isSignIn ? 'Sign in' : 'Sign Up'
                  }
                </button>
              </form>
              <div className='flex flex-col gap-2'>
                {
                  isSignIn && <p className='text-xs cursor-pointer'>Forgot password</p>
                }

                <p className='text-xs text-gray-400 flex gap-2'>
                  {
                    isSignIn ? 'New to Netflix' : 'Already Signed Up'
                  }
                  <span className='font-bold cursor-pointer text-white' onClick={toggleSignIn}>
                    {
                      isSignIn ? 'Sign Up' : 'Sign In'
                    }
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login