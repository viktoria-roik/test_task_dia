import { ReactComponent as Logo } from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import './Header.scss';
import { Navigation } from './Navigation';
import { HeaderButtons } from './HeaderButtons';


export const Header: React.FC = () => {
  return (
    <header className="header">
      {/* <div className="header__container"> */}
      <div className="header__logo logo">
          <Link to="/">
            <Logo className="logo__img" />
          </Link>
      </div>

      <Navigation />

      <HeaderButtons />

      {/* </div> */}
    </header>
  );
};