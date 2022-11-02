import React from 'react';
import clsx from 'clsx';
import styles from './NewsLetterTextContent.module.css';
import PropTypes from 'prop-types';

const NewsLetterTextContent = ({ isHomePage }) => {
  return (
    <div className={clsx({ [styles.home]: isHomePage })}>
      <h5 className={clsx({ 'body-short-03': !isHomePage, 'h-100': isHomePage }, styles.footer_heading)}>
        Get our newsletter
      </h5>
      <div className={clsx({ 'text-md--short': !isHomePage, 'subtitle-02': isHomePage }, styles.footer_description)}>
        The latest content in the world of smart contract development – delivered straight to your inbox!
      </div>
    </div>
  );
};

NewsLetterTextContent.propTypes = {
  isHomePage: PropTypes.bool,
};
NewsLetterTextContent.defaultProps = {
  isHomePage: false,
};
export default NewsLetterTextContent;
