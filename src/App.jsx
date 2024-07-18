import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/dashboard/Home';
import Login from './components/auth/Login';
import DetailsMovie from './components/dashboard/layout/movieDetails/DetailsMovie';
import Body from './components/Body';

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: 'movies',
      element: <Body />,
      children:[
        {
          path: '',
          element: <Home />,
        },
        {
          path: ':id',
          element: <DetailsMovie />,
        }
      ]
    }
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRoutes} />
    </Provider>
  );
}

export default App;
