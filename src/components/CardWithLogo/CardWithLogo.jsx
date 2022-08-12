import Image from 'next/image';
import React from 'react';
import styles from './CardWithLogo.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import ArrowRightRounded from '@/icons/arrow-right-white-rounded.svg';

export default function CardWithLogo({ href, logo, width, height, link_text }) {
  const linkTextClasses = clsx('btn-sm--extra-bold', styles.link_text);
  const cardClasses = clsx(styles.blockchain_card);
  return (
    <Link href={href} passHref>
      <a className={cardClasses}>
        <Image src={logo} alt={link_text} width={width || '100%'} height={height} objectFit="contain" />
        <div className={linkTextClasses}>
          {' '}
          {link_text} <ArrowRightRounded />
        </div>
      </a>
    </Link>
  );
}

CardWithLogo.propTypes = {
  href: PropTypes.string.isRequired,
  logo: PropTypes.string,
  link_text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

CardWithLogo.defaultProps = {
  isHomePage: false,
};
