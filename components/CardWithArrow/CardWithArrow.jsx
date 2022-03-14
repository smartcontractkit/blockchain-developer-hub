import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CardWithArrow.module.css';
import Svg from '@/components/Svg';

const CardWithArrow = ({ index, title, description, itemsCount, showIndex }) => {
  const cardClasses = clsx(styles.card, {
    [styles.few_cards]: index + 1 < itemsCount,
    [styles.has_description]: !showIndex,
  });
  const indexClasses = clsx('body-short-02--bold', styles.num);
  const titleClasses = clsx('subtitle-01', styles.title);
  const descriptionClasses = clsx('body-long-02', styles.description);

  const indexChecks = (index) => {
    return index > 9 ? index : `0${index + 1}`;
  };

  return (
    <div className={cardClasses}>
      {showIndex && <small className={indexClasses}>{indexChecks(index)}</small>}
      <h4 className={titleClasses}>{title}</h4>
      {description && <p className={descriptionClasses}> {description} </p>}
      <Svg className={styles.arrow} width="20" height="20" href="/icons/arrow-right.svg" />
    </div>
  );
};

CardWithArrow.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  itemsCount: PropTypes.number.isRequired,
  showIndex: PropTypes.bool.isRequired,
};

CardWithArrow.defaultProps = {
  showIndex: true,
};

export default CardWithArrow;
