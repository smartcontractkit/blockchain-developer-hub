import styles from './Card.module.css';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';
import Svg from '@/components/Svg';
import dayjs from 'dayjs';

function Card({
  variant = 'gray',
  title,
  subtitle,
  description,
  image,
  href,
  online,
  location,
  start_date,
  end_date,
  prize,
  level,
}) {
  const classes = clsx(styles.container, { [styles.light]: variant === 'light' });
  const titleClasses = clsx('body-short-01--bold', styles.title);
  const subTitleClasses = clsx('caption', styles.subtitle);
  const descriptionClasses = clsx('body-long-02', styles.description);
  const levelClasses = clsx('caption', styles.level);
  const prizeClasses = clsx('caption', styles.prize);
  const footerClasses = clsx('caption', styles.footer);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={classes}>
        {image && <Image src={image} alt={title} width="200" height="150" className={styles.image} />}

        <h2 className={titleClasses}>{title}</h2>

        {subtitle && <h3 className={subTitleClasses}>{subtitle}</h3>}

        {description && <p className={descriptionClasses}>{description}</p>}

        {level && <div className={levelClasses}>{level}</div>}

        {prize && (
          <div className={prizeClasses}>
            <Svg height="18" width="18" href="/icons/prize.svg" />
            {prize} in prizes
          </div>
        )}

        <div className={footerClasses}>
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
          {end_date && start_date && (
            <span>
              <Svg height="20" width="20" href="/icons/calender.svg" />
              {dayjs(start_date).format('MMM D')}
              &nbsp; - &nbsp;
              {dayjs(end_date).format('MMM D, YYYY')}
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
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  prize: PropTypes.string,
  href: PropTypes.string.isRequired,
  level: PropTypes.string,
};

export default Card;
