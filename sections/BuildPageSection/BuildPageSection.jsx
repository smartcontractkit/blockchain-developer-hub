import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './BuildPageSection.module.css';
import Card from '@/components/Card';

function BuildPageSection({ name, overview, items }) {
  const headingClasses = clsx('subtitle-01', styles.headings);
  const overviewClasses = clsx('body-long-02', styles.overview);

  return (
    <div className={styles.mainContent}>
      <h2 className={headingClasses}>{name}</h2>
      {overview && <p className={overviewClasses}>{overview}</p>}
      <div className={styles.cards}>
        {items.map(({ title, prize, image, description, location, online, date }, index) => (
          <Card
            title={title}
            prize={prize}
            description={description}
            location={location}
            online={online}
            date={date}
            image={image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

BuildPageSection.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  items: PropTypes.array,
};

BuildPageSection.DefaultProp = {
  items: [],
};
export default BuildPageSection;
