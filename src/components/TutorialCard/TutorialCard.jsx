import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './TutorialCard.module.css';

export default function TutorialCard({ heading, author, date, description, variant, href }) {
  const classes = clsx(styles.tut_card, { [styles.tut_card_gray]: variant === 'gray' });
  const heading_classes = clsx(styles.tut_card_content, 'body-short-01--bold', styles.tur_card_heading);
  const author_date_classes = clsx(styles.tut_card_content, 'caption', styles.tur_card_author_date);
  const description_classes = clsx(styles.tut_card_content, 'body-long-02', styles.tut_card_description);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={classes}>
        <h3 className={heading_classes}>{heading}</h3>
        <p className={author_date_classes}>
          <small>{author}</small>
          {date && (
            <>
              <span>|</span>
              <small>{date}</small>
            </>
          )}
        </p>
        {description && <p className={description_classes}>{description}</p>}
      </div>
    </a>
  );
}

TutorialCard.propTypes = {
  heading: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'gray']),
};

TutorialCard.defaultProps = {
  variant: 'default',
};
