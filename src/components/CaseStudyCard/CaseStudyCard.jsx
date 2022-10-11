import React from 'react';
import styles from './CaseStudyCard.module.css';
import PropTypes from 'prop-types';
import getTags from '@/helpers/getTags';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudyCard({ tags, image, title, href }) {
  const tagLists = getTags(tags);
  const tagClasses = clsx('body-short-03', styles.tag);
  const titleClasses = clsx('text-lg--short-semi');
  const itsExternalLink = href.startsWith('https://') || href.startsWith('http://') ? true : false;

  return (
    <li className={styles.card}>
      <Link href={href} passHref>
        <a target={itsExternalLink ? '_blank' : null} rel="noopener noreferrer">
          <div className={styles.card_heading}>
            <div className={styles.tags}>
              {tagLists.map((tag, index) => (
                <span className={tagClasses} key={index}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={titleClasses}>{title}</div>
          </div>
          <div className={styles.card_image}>
            <Image src={image} alt="case image" layout="fill" />
          </div>
        </a>
      </Link>
    </li>
  );
}

CaseStudyCard.propTypes = {
  tags: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
};
