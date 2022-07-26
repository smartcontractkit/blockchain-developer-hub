import PropTypes from 'prop-types';
import Svg from '@/components/Svg';
import styles from './Testimonial.module.css';

function Testimonial({ title, content, source, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <div className={styles.card__info}>
          <span className={styles.title}>{title}</span>
          <span className={styles.content}>{content}</span>
          <span className={styles.source}>
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
  content: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Testimonial;
