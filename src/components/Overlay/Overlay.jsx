import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Overlay.module.css';

export default function Overlay({ showOverlay, isOverview, toggleMenu }) {
  return (
    <div
      className={clsx({ [styles.mobile_menu_overlay]: showOverlay, [styles.overview]: isOverview })}
      onClick={() => toggleMenu(false)}
    />
  );
}

Overlay.propTypes = {
  showOverlay: PropTypes.bool,
  isOverview: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

Overlay.defaultProps = {
  showOverlay: false,
  isOverview: false,
};
