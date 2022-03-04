import styles from './Card.module.css';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';
import Svg from '@/components/Svg';

function Card({ variant = 'gray', title, subtitle, description, image, href, online, location, date, prize, level }) {
  const classes = clsx(styles.container, { [styles.light]: variant === 'light' });

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={classes}>
        {image && <Image src={image} alt={title} width="200" height="150" className={styles.image} />}

        <h2 className={styles.title}>{title}</h2>

        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}

        {description && <p className={styles.description}>{description}</p>}

        {level && <div className={styles.level}>{level}</div>}

        {prize && (
          <div className={styles.prize}>
            <Svg height="18" width="18" href="/icons/prize.svg" />
            {prize} in prizes
          </div>
        )}

        <div className={styles.footer}>
          {/* If online = true or location exist */}
          {(online || location) && (
            <span>
              {online ? (
                <Svg height="20" width="20" href="/icons/online.svg" />
              ) : (
                location && <Svg height="20" width="20" href="/icons/location.svg" />
              )}
              {location || 'Online'}
            </span>
          )}

          {/* If date exist */}
          {date && (
            <span>
              <Svg height="20" width="20" href="/icons/calender.svg" />
              {date}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

Card.propTypes = {
  variant: PropTypes.oneOf(['gray', 'light']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  online: PropTypes.bool,
  location: PropTypes.string,
  date: PropTypes.string,
  prize: PropTypes.string,
  href: PropTypes.string.isRequired,
  level: PropTypes.string,
};

export default Card;
