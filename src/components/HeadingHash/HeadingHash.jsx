import React from 'react';
import Link from 'next/link';
import styles from './HeadingHash.module.css';
import PropTypes from 'prop-types';

export default function HeadingHash({ to, ...props }) {
  return (
    <Link href={to} passHref>
      <a {...props} className={styles.heading_hash}>
        #
      </a>
    </Link>
  );
}

HeadingHash.propTypes = {
  to: PropTypes.string.isRequired,
};
