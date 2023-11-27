import React from 'react';
import { useDispatch } from 'react-redux';

const HeaderWrapper = () => {
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
    console.log('s')
  };

  return (
    <div className="header__wrapper">
      <div onClick={() =>openMenu()} className="header__wrapper__logo">
        Marvel
      </div>
    </div>
  );
};

export default HeaderWrapper;