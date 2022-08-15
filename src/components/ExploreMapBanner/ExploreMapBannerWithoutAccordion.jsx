import PropTypes from 'prop-types';
import clsx from 'clsx';
import NavLink from '@/components/NavLink';

import styles from './ExploreMapBanner.module.css';

export default function ExploreMapBanner({ isHomePage, description, children }) {
  const descriptionClasses = clsx('text-lg--long', styles.description);

  return (
    <div className={clsx(styles.container, { [styles.home]: isHomePage })}>
      {children}
      <p className={descriptionClasses}>{description}</p>
      <div className={clsx(styles.btns, 'btn--extra-bold')}>
        <NavLink
          to={
            'https://www.figma.com/proto/U6iAHSsDlqoJfOaNwRigeO/Ecosystem-Tools-Map?page-id=0%3A1&node-id=2%3A1241&viewport=264%2C48%2C0.68&scaling=scale-down'
          }
          target="_blank"
          rel="noopener noreferrer"
          type="primary"
          text={'Explore Ecosystem'}
          iconPosition="left"
          icon="grid.svg"
          className="explore"
        />
        {!isHomePage && (
          <NavLink
            to={'https://developer-roadmap-1.vercel.app/blockchain'}
            target="_blank"
            rel="noopener noreferrer"
            type="outline"
            text={'How to become a blockchain engineer'}
            iconPosition="left"
            icon="fork.svg"
            className={styles.blockchain}
          />
        )}
      </div>
    </div>
  );
}

ExploreMapBanner.propTypes = {
  description: PropTypes.string.isRequired,
  isHomePage: PropTypes.bool,
  children: PropTypes.node,
};

ExploreMapBanner.defaultProps = {
  isHomePage: true,
};
