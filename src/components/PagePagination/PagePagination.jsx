import React from 'react';
import PropTypes from 'prop-types';
import PagePaginationLink from '../PagePaginationLink';
import clsx from 'clsx';
import styles from './PagePagination.module.css';

export default function PagePagination({ text, link, hasPadding }) {
  return (
    <div className={clsx(styles.pagePagination, { [styles.padding]: hasPadding })}>
      <PagePaginationLink text={text} link={link} />
    </div>
  );
}

PagePagination.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  hasPadding: PropTypes.bool,
};

PagePagination.defaultProps = {
  hasPadding: true,
};
