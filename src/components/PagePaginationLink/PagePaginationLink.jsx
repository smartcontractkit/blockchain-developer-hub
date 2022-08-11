import styles from './PagePaginationLink.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Svg from '../Svg';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import navbarLinks from '@/data/navbarLinks.yaml';

export default function PagePaginationLink({ link, navDirection, text, ...props }) {
  const [isLastLink, setIsLastLink] = React.useState(false);
  const router = useRouter();

  const pagePagination = clsx(styles.pagePagination, {
    [styles.prevButton]: navDirection === 'previous',
  });

  const direction = clsx(styles.direction, {
    [styles.prevDirection]: navDirection === 'previous',
  });

  React.useEffect(() => {
    const items = navbarLinks.items;
    setIsLastLink(router.pathname.match(new RegExp(items[items.length - 1].href, 'gi')) ? true : false);
  }, [link]);

  if (isLastLink) return null;

  return (
    <Link href={link} passHref>
      <a {...props} className={pagePagination} {...props}>
        <div className={direction}>
          <span>{navDirection}</span>
          <Svg
            height="18"
            width="18"
            href={`/icons/arrow-right-rounded-green-200.svg`}
            title={`${navDirection} icon`}
          />
        </div>
        <span>{`Go to "${text}"`}</span>
      </a>
    </Link>
  );
}
PagePaginationLink.propTypes = {
  link: PropTypes.string.isRequired,
  navDirection: PropTypes.oneOf(['previous', 'next']),
  text: PropTypes.string.isRequired,
};

PagePaginationLink.defaultProps = {
  navDirection: 'next',
};
