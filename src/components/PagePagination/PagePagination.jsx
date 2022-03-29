import React from 'react';
import PropTypes from 'prop-types';
import NavLink from '../NavLink';

import styles from './PagePagination.module.css';

export default function PagePagination({ text, link }) {
  return (
    <div className={styles.pagePagination}>
      <NavLink icon="arrow-right.svg" type="outline" iconPosition="right" text={`Next: ${text}`} to={link} />
    </div>
  );
}

PagePagination.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
