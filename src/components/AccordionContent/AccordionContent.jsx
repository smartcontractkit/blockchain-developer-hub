import React from 'react';
import styles from './AccordionContent.module.css';
import PropTypes from 'prop-types';

export default function AccordionContent({ url, title, expanded }) {
  return <>{expanded && <iframe src={url} className={styles.iframe} title={title} role="region" />}</>;
}

AccordionContent.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
};
