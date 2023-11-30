import React, { useState } from 'react';
import cn from 'classnames';
import { ReactComponent as BurgerMenuIcon } from '../../../assets/icons/burger-icon.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close_icon.svg';

import './HeaderButtons.scss';
import { BurgerMenu } from '../BurgerMenu';

export const HeaderButtons: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  return (
    <div className="buttons">
      <div
        className="icon-wrapper icon-wrapper--menu"
        onClick={() => setIsActiveBurger(!isActiveBurger)}
      >
        {isActiveBurger ? (
          <CloseIcon className="icon icon--close" />
        ) : (
          <BurgerMenuIcon
            className={cn('icon icon--menu', { 'is-active': isActiveBurger })}
          />
        )}
      </div>

      {isActiveBurger && (
        <div onClick={() => setIsActiveBurger(false)}>
          <BurgerMenu />
        </div>
      )}
    </div>
  );
};
