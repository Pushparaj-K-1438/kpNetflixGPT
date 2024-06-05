import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./dashboard/Home"
import Login from "./auth/Login"

const Body = () => {
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
    return (
        <div>
            <RouterProvider router={appRoutes} />
        </div>
    )
}

export default Body