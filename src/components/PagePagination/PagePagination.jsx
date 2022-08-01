import styles from './PagePagination.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Svg from '../Svg';
import Link from 'next/link';

export default function PagePagination({ link, navDirection, text, ...props }) {
  const pagePagination = clsx(styles.pagePagination, {
    [styles.prevButton]: navDirection === 'previous',
  });

  const direction = clsx(styles.direction, {
    [styles.prevDirection]: navDirection === 'previous',
  });

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
PagePagination.propTypes = {
  link: PropTypes.string.isRequired,
  navDirection: PropTypes.oneOf(['previous', 'next']),
  text: PropTypes.string.isRequired,
};

PagePagination.defaultProps = {
  navDirection: 'next',
};
