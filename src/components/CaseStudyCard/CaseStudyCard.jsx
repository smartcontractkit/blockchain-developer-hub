import React from 'react';
import styles from './CaseStudyCard.module.css';
import PropTypes from 'prop-types';
import getTags from '@/helpers/getTags';

export default function CaseStudyCard({ tags, image, title }) {
  const tagLists = getTags(tags);

  return (
    <div className={styles.card}>
      <div className={styles.card_heading}>
        <div className={styles.tags}>
          {tagLists.map((tag, index) => (
            <span className={styles.tag} key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div>{title}</div>
      </div>
      <div className={styles.card_image}>
        <img src={image} alt="case image" />
      </div>
    </div>
  );
}

CaseStudyCard.propTypes = {
  tags: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
};
