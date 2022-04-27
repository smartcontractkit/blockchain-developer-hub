import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Overlay.module.css';

export default function Overlay({ showOverlay, toggleMenu }) {
  return <div className={clsx({ [styles.mobile_menu_overlay]: showOverlay })} onClick={() => toggleMenu(false)} />;
}

Overlay.propTypes = {
  showOverlay: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

Overlay.defaultProps = {
  showOverlay: false,
};
