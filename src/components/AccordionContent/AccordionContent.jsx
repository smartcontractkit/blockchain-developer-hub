import React from 'react';
import styles from './AccordionContent.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function AccordionContent({ url, title, expanded }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [expanded]);

  return (
    <>
      {loading && <p className={clsx(styles.loading, 'caption')}>Loading...</p>}
      {expanded && (
        <iframe
          src={url}
          className={styles.iframe}
          title={title}
          frameBorder="0"
          role="region"
          onLoad={() => setLoading(false)}
        />
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(styles.visit_page, 'btn')}
        onClick={(e) => e.stopPropagation()}
      >
        <small>Go to original page</small>
        <img src="/icons/open-page.svg" alt="open page" />
      </a>
    </>
  );
}

AccordionContent.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
};
