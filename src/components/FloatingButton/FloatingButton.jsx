import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './FloatingButton.module.css';

export default function FloatingButton({ title, triggerPanel }) {
  const btnClasses = clsx('btn', {
    [styles.chapters_overview_mobile_btn]: title === 'chapters',
    [styles.articles_overview_mobile_btn]: title === 'articles',
  });

  return (
    <button className={btnClasses} onClick={() => triggerPanel(true)}>
      <span>{title} overview</span>
      <img src="/icons/dropdown-green.svg" alt="dropdown icon" />
    </button>
  );
}

FloatingButton.propTypes = {
  title: PropTypes.oneOf(['articles', 'chapters']),
  triggerPanel: PropTypes.func.isRequired,
};

FloatingButton.defaultProps = {
  title: 'articles',
};
