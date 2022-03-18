import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './QuoteCard.module.css';
import CardWithArrow from '@/components/CardWithArrow';
import padNumber from '@/helpers/padNumber';

const Quotecard = ({ textDirection, cards, children }) => {
  const bodyClasses = clsx(styles.body, {
    [styles.reverse_body]: textDirection === 'left',
  });
  const textClasses = clsx({
    [styles.left_content]: textDirection === 'left',
    [styles.right_content]: textDirection === 'right',
  });

  return (
    <div className={bodyClasses}>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <CardWithArrow
            href={card.href}
            title={card.title}
            description={card.description}
            subtitle={padNumber(index, 9)}
            key={index}
          />
        ))}
      </div>
      <div className={textClasses}>{children}</div>
    </div>
  );
};

Quotecard.propTypes = {
  textDirection: PropTypes.oneOf(['left', 'right']),
  cards: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

Quotecard.defaultProps = {
  textDirection: 'right',
};

export default Quotecard;
