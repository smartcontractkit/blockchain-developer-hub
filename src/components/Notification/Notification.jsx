import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Notification.module.css';

export default function Notification({ message, isActive, type }) {
  const notifyClasses = clsx('btn--extra-bold', styles.container, styles[type], {
    [styles.active]: isActive,
  });
  return <div className={notifyClasses}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'fail']),
  isActive: PropTypes.bool,
};

Notification.defaultProps = {
  isActive: false,
  type: 'success',
};
