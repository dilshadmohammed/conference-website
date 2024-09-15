
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
