import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./dashboard/Home"
import Login from "./auth/Login"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../utils/userSlice'


const Body = () => {
    const dispatch = useDispatch();
    const appRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Home />
        }
    ]);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(login({ uid: uid, email: email, displayName: displayName }));
            } else {
                dispatch(logout());
            }
        });
    }, []);
    return (
        <div>
            <RouterProvider router={appRoutes} />
        </div>
    )
}

export default Body