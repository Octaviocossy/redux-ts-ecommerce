import { Link } from 'react-router-dom';

import { INavItem } from './navbar.model';

interface Props {
  item: INavItem;
}

const NavItem = ({ item: { path, icon, name } }: Props) => {
  return (
    <li>
      <Link className={'flex justify-center items-center'} to={path}>
        {icon && <span className="ml-4 mr-2">{icon}</span>}
        {name && <p className="font-semibold">{name}</p>}
      </Link>
    </li>
  );
};

export default NavItem;
