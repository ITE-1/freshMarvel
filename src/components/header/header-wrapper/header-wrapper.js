import React from 'react';
import { useDispatch } from 'react-redux';
import DesignedBy from '../../author-license/designedBy';
import '../header-wrapper/header-wrapper.scss';

const HeaderWrapper = () => {
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
    console.log('s')
  };

  return (
    <div className="header__wrapper">
      <div onClick={() =>openMenu()} className="header__wrapper__logo">
        Marvel<span>information portal</span>
      </div>

      <DesignedBy />
    </div>
  );
};

export default HeaderWrapper;