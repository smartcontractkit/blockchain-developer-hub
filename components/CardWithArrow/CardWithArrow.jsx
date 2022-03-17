import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CardWithArrow.module.css';
import Svg from '@/components/Svg';

const CardWithArrow = ({ title, description, subtitle, href }) => {
  const subtitleClasses = clsx('body-short-02--bold', styles.subtitle);
  const titleClasses = clsx('subtitle-01', styles.title);
  const descriptionClasses = clsx('body-long-02', styles.description);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={styles.card}>
        {subtitle && <small className={subtitleClasses}>{subtitle}</small>}
        <h4 className={titleClasses}>{title}</h4>
        {description && <p className={descriptionClasses}> {description} </p>}
        <Svg width="20" height="20" href="/icons/arrow-right.svg" />
      </div>
    </a>
  );
};

CardWithArrow.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string,
  subtitle: PropTypes.string,
};

export default CardWithArrow;
