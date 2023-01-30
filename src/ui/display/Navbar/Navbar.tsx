import { RiShoppingCartLine } from 'react-icons/ri';

import { Routes } from '../../../models';

import { INavItem } from './navbar.model';
import NavItem from './NavItem';

const navItems: INavItem[] = [
  { name: 'Home', path: `${Routes.HOME}1` },
  {
    path: Routes.CHECKOUT,
    icon: <RiShoppingCartLine className="w-[1.1rem] h-[1.1rem]" />,
  },
];

const Navbar = () => {
  return (
    <div className="border-b-2 absolute w-[100%]">
      <div className="max-w-7xl m-auto flex px-2">
        <h1 className="font-bold text-2xl py-[1.5rem] flex-1">fakecommerce</h1>
        <ul className="flex flex-row justify-center items-center">
          {navItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
