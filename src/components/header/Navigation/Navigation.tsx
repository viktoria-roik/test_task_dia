import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import { ReactComponent as MessageIcon } from '../../../assets/icons/message-icon.svg';
import { ReactComponent as BuildIcon } from '../../../assets/icons/build-icon.svg';
import { ReactComponent as PersonIcon } from '../../../assets/icons/person-icon.svg';
import { ReactComponent as BellIcon } from '../../../assets/icons/bell-icon.svg';
import { ReactComponent as MoreIcon } from '../../../assets/icons/more-icon.svg';

const languages = [
  { code: 'ukr', name: 'УКР' },
  { code: 'en', name: 'ENG' },
  { code: 'fr', name: 'FR' },
  { code: 'pl', name: 'PL' },
  // More languages
];

export const Navigation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ukr');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setSearchTerm('');
    } else {
      alert('Please enter a search term.');
    }
  };

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <nav className="nav">
      <button className="nav__category category">Категорії</button>
        <form className="nav__search-bar search-bar">
          <input 
            className="search-bar__input"
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            className="search-bar__icon"
            onClick={handleSearch}
          >
            <SearchIcon />
          </button>
        </form>
        <button className="nav__advert-btn advert-btn">Створити оголошення</button>

        <ul className="nav__icons">
          <li>
            <Link to="/" className="nav__icon">
              <MessageIcon />
            </Link>
          </li>
          <li>
            <Link to="/" className="nav__icon">
              <BuildIcon />
            </Link>
          </li>
          <li>
            <Link to="/" className="nav__icon">
              <PersonIcon />
            </Link>
          </li>
          <li>
            <Link to="/" className="nav__icon">
              <BellIcon />
            </Link>
          </li>
          <li>
            <Link to="/" className="nav__icon">
              <MoreIcon />
            </Link>
          </li>
        </ul>

        <div className="nav__lang lang">
          <select 
            name="Select Language" 
            value={selectedLanguage}
            onChange={handleChangeLanguage}
            className="lang__select"
          >
            {languages.map((language) => (
              <option 
                key={language.code}
                value={language.code}
                className="lang__option"
              >
                {language.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
  );
};