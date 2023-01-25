import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl m-auto min-h-screen pt-[5rem]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
