import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './EcosystemAccordion.module.css';

export default function EcosystemAccordion({ title, subtitle, description, expanded, id, children, expandToggle }) {
  const toggleAccordion = () => {
    expandToggle(id);
  };

  return (
    <button
      className={clsx(styles.accordion, { [styles.expand]: expanded })}
      aria-expanded={expanded}
      aria-controls={`${id}-preview`}
      id={`${id}-accordionid`}
      onClick={toggleAccordion}
    >
      <div className={styles.text_content}>
        <div>
          <h2 className={clsx('subtitle-01', styles.heading)}>
            <span>{subtitle}</span>-<span className={styles.title}>{title}</span>
          </h2>
          <p className={clsx('body-short-01', styles.description)}>{description}</p>
        </div>

        <img src={`/icons/${expanded ? 'open-accordion.svg' : 'close-accordion.svg'}`} alt="accordion icon" />
      </div>

      <div
        role="region"
        id={`${id}-preview`}
        aria-labelledby={`${id}-accordionid`}
        className={styles.content}
        hidden={!expanded}
      >
        {children}
      </div>
    </button>
  );
}

EcosystemAccordion.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  expandToggle: PropTypes.func,
};
