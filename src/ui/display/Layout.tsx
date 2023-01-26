import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Layout = () => {
  return (
    <div className="text-gray-700">
      <Navbar />
      <div className="max-w-7xl m-auto min-h-screen pt-[5rem] px-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
