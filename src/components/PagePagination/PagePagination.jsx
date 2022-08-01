import React from 'react';
import PropTypes from 'prop-types';
import PagePaginationLink from '../PagePaginationLink';

import styles from './PagePagination.module.css';

export default function PagePagination({ text, link }) {
  return (
    <div className={styles.pagePagination}>
      <PagePaginationLink text={text} link={link} />
    </div>
  );
}

PagePagination.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
