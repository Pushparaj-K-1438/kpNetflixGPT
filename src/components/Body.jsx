import { Outlet } from 'react-router-dom';
import Header from './header/Header';

const Body = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;