import PropTypes from 'prop-types';
import clsx from 'clsx';
import NavLink from '@/components/NavLink';

import styles from './ExploreMapBanner.module.css';

export default function ExploreMapBanner({ isHomePage, title, description }) {
  const titleClasses = clsx('h-500', styles.title);
  const descriptionClasses = clsx('body-long-01', styles.description);

  return (
    <div className={styles.container}>
      {isHomePage ? <h2 className={titleClasses}>{title}</h2> : <h1 className={titleClasses}>{title}</h1>}
      <p className={descriptionClasses}>{description}</p>
      <NavLink
        to={'https://smartcontractecosystem.com/'}
        target="_blank"
        rel="noopener noreferrer"
        type="primary"
        text={'Explore Map'}
        iconPosition="right"
        icon="map-pointer.svg"
      />
    </div>
  );
}

ExploreMapBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isHomePage: PropTypes.bool,
};

ExploreMapBanner.defaultProps = {
  isHomePage: true,
};
