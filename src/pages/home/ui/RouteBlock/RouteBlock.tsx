import { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import './Route.scss';
import 'react-datepicker/dist/react-datepicker.css';

export const RouteBlock = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [address, setAddress] = useState('');
  const [addressB, setAddressB] = useState('');
  const [addressC, setAddressC] = useState('');

  const handleDateChangee = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="route-block">
      <h2 className="route-block__title">Маршрут</h2>
      <div className="route-block__routes routes">
        <div className="routes__route route">
          <h3 className="route__title">Точка A</h3>
          <form className="route__info info info-main">
            <div className="info-main__date">
              <h4 className="info__subtitle">Дата</h4>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChangee}
                className="info__input info__input--date"
              />
            </div>

            <div className="info-main__place">
              <h4 className="info__subtitle">Адреса</h4>
              <PlacesAutocomplete value={address} onChange={setAddress}>
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: '',
                        className: 'info__place-input info__input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              style,
                            })}
                          >
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>

            <div className="info-main__working-time">
              <h4 className="info__subtitle">Час роботи (год)</h4>
              <input type="number" className="info__input" />
            </div>

            <div className="info-main__arrival-time">
              <h4 className="info__subtitle">Час прибуття</h4>
              <input type="time" className="info__input" />
            </div>
          </form>
        </div>

        <div className="routes__route route">
          <h3 className="route__title">Точка B</h3>
          <form className="route__info info">
            <div className="info__place">
              <h4 className="info__subtitle">Адреса</h4>
              <PlacesAutocomplete value={addressB} onChange={setAddressB}>
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: '',
                        className: 'location-search-input',
                      })}
                      className="info__place-input info__input"
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              style,
                            })}
                          >
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>

            <div className="info__working-time">
              <h4 className="info__subtitle">Час роботи (год)</h4>
              <input type="number" className="info__input" />
            </div>
          </form>
        </div>

        <div className="routes__route route">
          <h3 className="route__title">Точка C</h3>
          <form className="route__info info">
            <div className="info__place">
              <h4 className="info__subtitle">Адреса</h4>
              <PlacesAutocomplete value={addressC} onChange={setAddressC}>
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: '',
                        className: 'info__place-input info__input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              style,
                            })}
                          >
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>

            <div className="info__working-time">
              <h4 className="info__subtitle">Час роботи (год)</h4>
              <input type="number" className="info__input" />
            </div>
          </form>
        </div>
      </div>

      <button className="route-block__btn">Додати ще одну точку</button>
    </div>
  );
};
