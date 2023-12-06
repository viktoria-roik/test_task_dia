import classNames from 'classnames';
import { useState } from 'react';
import './PayOption.scss';

const options = [
  { value: 'option1', label: 'Готівка перед завантаженням' },
  { value: 'option2', label: 'Готівка перед розвантаженням' },
  {
    value: 'option3',
    label: 'Безпечна угода через MOOW',
    additionalOption: 'Visa/MasterCard',
  },
];

export const PayOption = () => {
  const [isSelected, setIsSelected] = useState('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.value);
  };

  return (
    <div className="pay-options">
      <h2 className="pay-options__title">Оплата</h2>

      <div className="pay-option__option option">
        {options.map(option => (
          <label
            key={option.value}
            className={classNames('option__label', {
              selected: isSelected === option.value,
            })}
          >
            <input
              type="radio"
              value={option.value}
              checked={isSelected === option.value}
              onChange={handleRadioChange}
              className="option__input"
            />
            <span className="option__circle"></span>

            <div className="option__about">
              <span className="option__name">{option.label}</span>
              {option.additionalOption && (
                <span className="option__additional-info">
                  {option.additionalOption}
                </span>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};
