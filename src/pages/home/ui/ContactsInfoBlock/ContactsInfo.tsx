import './ContactsInfo.scss';

export const ContactsInfo = () => {
  return (
    <div className="contacts">
      <h2 className="contacts__title">Контактні дані</h2>
      <form className="contacts__contact-info contact-info">
        <div className="contact-info__surname">
          <h4 className="contact-info__subtitle">Прізвище</h4>
          <input type="text" className="contact-info__input" required />
        </div>
        <div className="contact-info__name">
          <h4 className="contact-info__subtitle">Ім'я</h4>
          <input type="text" className="contact-info__input" required />
        </div>
        <div className="contact-info__phone-number">
          <h4 className="contact-info__subtitle">Номер телефону</h4>
          <input
            type="tel"
            className="contact-info__input"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
      </form>
    </div>
  );
};
