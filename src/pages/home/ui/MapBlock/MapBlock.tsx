import UZ from '../../../../assets/uz-photo.png';
import './MapBlock.scss';
import { ReactComponent as Eye } from '../../../../assets/icons/eye-icon.svg';

export const MapBlock = () => {
  return (
    <div className="map-block">
      <div className="map-block__card card">
        <div className="card__img">
          <img src={UZ} alt="uz-img" className="card__photo" />
        </div>
        <div className="card__info">
          <h3 className="card__name">Склад 1</h3>
          <span className="card__date">22.02.2022</span>
          <p className="card__price">3 000 грн/кв.м.</p>
          <span className="card__num">4.8</span>
          <span className="card__min-info">min 200 грн/кг</span>
          <div className="card__view">
            <Eye />
            <span className="card__view">12 тис.</span>
          </div>
        </div>
      </div>

      <div className="map-block__map map"></div>

      <div className="map-block__total-info total-info">
        <div className="total-info__block block">
          <p className="block__name">Подача транспорту</p>
          <span className="block__price">2000</span>
        </div>
        <div className="total-info__block block">
          <p className="block__name">Маршрут загрузка - вигрузка</p>
          <span className="block__price">2000</span>
        </div>
        <div className="total-info__block block">
          <p className="block__name">Послуги експедитора</p>
          <span className="block__price">2000</span>
        </div>
        <div className="total-info__block block">
          <p className="block__name">Послуги грузчиків</p>
          <span className="block__price">2000</span>
        </div>
      </div>
      <div className="map-block__total-price total-price">
        <p className="total-price__title">Ціна:</p>
        <p className="total-price__price">32 000 грн</p>
      </div>

      <button className="map-block__btn">Оформити</button>
    </div>
  );
};
