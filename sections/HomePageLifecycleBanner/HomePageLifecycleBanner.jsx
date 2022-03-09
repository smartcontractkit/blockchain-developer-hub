import NavLink from '@/components/NavLink';
import PropTypes from 'prop-types';
import styles from './HomePageLifecycleBanner.module.css';
import clsx from 'clsx';

function HomePageLifecycleBanner({ title, overview, link, linkText }) {
  const titleClasses = clsx('h-400', styles.title);
  const overviewClasses = clsx('body-long-01', styles.overview);

  return (
    <section className={styles.container}>
      <div className={styles.banner_left}>
        <h2 className={titleClasses}>{title}</h2>
        <p className={overviewClasses}>{overview}</p>
        <NavLink to={link} type="primary" text={linkText} iconPosition="right" icon="map-pointer.svg" />
      </div>
    </section>
  );
}

HomePageLifecycleBanner.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export default HomePageLifecycleBanner;
