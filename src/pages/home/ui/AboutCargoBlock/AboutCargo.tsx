import { useState, useRef } from 'react';
import classNames from 'classnames';
import './AboutCargo.scss';

export const AboutCargo = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setText(event.target.value);
  };

  const autoResizeTextarea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  return (
    <>
      <div className="about-block">
        <h2 className="about-block__title">Про вантаж</h2>
        <form className="about-block__cargo-info cargo-info">
          <div className="cargo-info__weight">
            <h4 className="cargo-info__subtitle">Вага вантажу (кг)</h4>
            <input type="number" className="cargo-info__input" />
          </div>
          <div className="cargo-info__sizes sizes">
            <h4 className="cargo-info__subtitle">Габарити вантажу ДШВ (м)</h4>
            <div className="sizes__inputs">
              <input type="number" className="sizes__input" />
              <span>x</span>
              <input type="number" className="sizes__input" />
              <span>x</span>
              <input type="number" className="sizes__input" />
            </div>
          </div>
          <div className="cargo-info__comment">
            <h4 className="cargo-info__subtitle">Коментар до замовлення</h4>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleTextareaChange}
              onInput={autoResizeTextarea}
              rows={4}
              placeholder="Вкажіть інформацію про груз, що перевозите..."
              className="cargo-info__textarea"
            ></textarea>
          </div>
        </form>
      </div>

      <div className={classNames('additional-service', { checked: isChecked })}>
        <input
          type="checkbox"
          id="myCheckbox"
          className="additional-service__input"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label
          htmlFor="myCheckbox"
          className="additional-service__label"
        ></label>
        <span className="additional-service__span">Послуги експедитора</span>
      </div>
    </>
  );
};
