import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './QuoteCard.module.css';
import CardWithArrow from '@/components/CardWithArrow';

const Quotecard = ({ textDirection, cards, card_showIndex, children }) => {
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
            index={index}
            title={card.title}
            description={card.description}
            itemsCount={cards.length}
            showIndex={card_showIndex}
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
  card_showIndex: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Quotecard.defaultProps = {
  textDirection: 'right',
};

export default Quotecard;
