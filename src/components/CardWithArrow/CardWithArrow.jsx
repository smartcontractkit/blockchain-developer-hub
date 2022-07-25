import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CardWithArrow.module.css';
import Link from 'next/link';

const CardWithArrow = ({ title, description, subtitle, link_text, href, target, children }) => {
  const subtitleClasses = clsx('body-short-02--bold', styles.subtitle);
  const titleClasses = clsx('text-lg--short-semi', styles.title);
  const descriptionClasses = clsx('text-lg--long', styles.description);
  const linkTextClasses = clsx('btn-sm--extra-bold', styles.link_text);

  return (
    <Link href={href} passHref>
      <a target={target} className={styles.card}>
        <div className={styles.card__inner}>
          {subtitle && <small className={subtitleClasses}>{subtitle}</small>}
          <div className={styles.icon}>{children}</div>
          <h4 className={titleClasses}>{title}</h4>
          {description && <div className={descriptionClasses}> {description} </div>}

          {link_text && (
            <div className={linkTextClasses}>
              {' '}
              {link_text} <img src="/icons/arrow-right-white-rounded.svg" alt="text link icon" />
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

CardWithArrow.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  link_text: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
};

export default CardWithArrow;
