import PropTypes from 'prop-types';
import styles from './HomePageLifecycleBanner.module.css';
import ExploreMapBanner from '@/components/ExploreMapBanner';

function HomePageLifecycleBanner({ title, overview }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ExploreMapBanner title={title} description={overview} isHomePage={true} />
      </div>
    </section>
  );
}

HomePageLifecycleBanner.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
};

export default HomePageLifecycleBanner;
