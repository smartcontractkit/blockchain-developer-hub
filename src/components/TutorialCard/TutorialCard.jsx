import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './TutorialCard.module.css';

export default function TutorialCard({ heading, author, description, variant, href }) {
  const classes = clsx(styles.tutorial_card, { [styles.tutorial_card_gray]: variant === 'gray' });
  const heading_classes = clsx(styles.tutorial_card_content, 'text-md--short-semi', styles.tutorial_card_heading);
  const author_date_classes = clsx('caption--semi-bold', styles.tutorial_card_author_date);
  const description_classes = clsx(styles.tutorial_card_content, 'body-long-02', styles.tutorial_card_description);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={classes}>
        <div className={author_date_classes}>{author}</div>
        <div className={heading_classes}>{heading}</div>
        {description && <p className={description_classes}>{description}</p>}
      </div>
    </a>
  );
}

TutorialCard.propTypes = {
  heading: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'gray']),
};

TutorialCard.defaultProps = {
  variant: 'default',
};
