import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './EcosystemAccordion.module.css';

export default function EcosystemAccordion({ title, subtitle, description, expanded, id, children, expandToggle }) {
  const toggleAccordion = () => {
    expandToggle(id);
  };

  return (
    <div
      className={clsx(styles.accordion, { [styles.expand]: expanded })}
      aria-expanded={expanded}
      aria-controls={`${id}-preview`}
      id={`${id}-accordionid`}
      onClick={toggleAccordion}
    >
      <div>
        <div>
          <span>{subtitle}</span>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
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
    </div>
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
