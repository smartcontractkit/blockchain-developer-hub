import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './EcosystemAccordion.module.css';

export default function EcosystemAccordion({ expanded, id, children, expandToggle }) {
  const toggleAccordion = () => {
    expandToggle(id);
  };

  return (
    <div>
      <button
        aria-expanded={expanded}
        aria-controls={`${id}-preview`}
        id={`${id}-accordionid`}
        onClick={toggleAccordion}
      ></button>

      <div
        role="region"
        id={`${id}-preview`}
        aria-labelledby={`${id}-accordionid`}
        className={clsx(styles.panel, { [styles.active]: expanded })}
        hidden={!expanded}
      >
        {children}
      </div>
    </div>
  );
}

EcosystemAccordion.propTypes = {
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  expandToggle: PropTypes.func,
};
