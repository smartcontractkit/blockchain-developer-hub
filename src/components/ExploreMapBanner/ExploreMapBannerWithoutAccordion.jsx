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
          to={'https://ecosystem.blockchain.education'}
          target="_blank"
          rel="noopener noreferrer"
          type="primary"
          text={'Blockchain Ecosystem'}
          iconPosition="left"
          icon="grid.svg"
          className="explore"
        />
        {!isHomePage && (
          <NavLink
            to={'https://roadmap.sh/blockchain'}
            target="_blank"
            rel="noopener noreferrer"
            type="outline"
            text={'How to become a blockchain developer'}
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
