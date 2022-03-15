import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CardWithArrow.module.css';
import Svg from '@/components/Svg';

const CardWithArrow = ({ title, description, subtitle }) => {
  const cardClasses = clsx(styles.card, {
    [styles.has_description]: description,
  });
  const subtitleClasses = clsx('body-short-02--bold', styles.subtitle);
  const titleClasses = clsx('subtitle-01', styles.title);
  const descriptionClasses = clsx('body-long-02', styles.description);

  return (
    <div className={cardClasses}>
      {subtitle && <small className={subtitleClasses}>{subtitle}</small>}
      <h4 className={titleClasses}>{title}</h4>
      {description && <p className={descriptionClasses}> {description} </p>}
      <Svg className={styles.arrow} width="20" height="20" href="/icons/arrow-right.svg" />
    </div>
  );
};

CardWithArrow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  subtitle: PropTypes.string,
};

export default CardWithArrow;
