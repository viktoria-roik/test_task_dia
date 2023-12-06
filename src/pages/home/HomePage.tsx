import './HomePage.scss';

import { Header } from 'components/header';
import { RouteBlock } from './ui/RouteBlock';
import { AboutCargo } from './ui/AboutCargoBlock';
import { ContactsInfo } from './ui/ContactsInfoBlock';
import { PayOption } from './ui/PayOptionBlock';
import { MapBlock } from './ui/MapBlock';

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="home__title">Замовити</h1>
        <div className="home__container">
          <RouteBlock />
          <AboutCargo />
          <ContactsInfo />
          <PayOption />
          <MapBlock />
        </div>
      </div>
    </>
  );
};
