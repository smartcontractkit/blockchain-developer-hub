import PropTypes from 'prop-types';
import Svg from '@/components/Svg';
import clsx from 'clsx';
import styles from './Testimonial.module.css';

function Testimonial({ title, source, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.card__info}>
          <span className={clsx('overline--extra-bold', styles.title)}>{title}</span>
          <span className={clsx('subtitle-bold', styles.content)}>
            <span>Blockchain development skills are rated as the fastest-growing in-demand skills, with an</span>{' '}
            increase of 60x <span>in 2020.</span>
          </span>
          <span className={clsx('btn--extra-bold', styles.source)}>
            source: <span>{source}</span>
          </span>
        </div>
        <div className={styles.icon__container}>
          <Svg height="64" width="64" href={icon} title="testimonial icon" />
        </div>
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  source: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Testimonial;
