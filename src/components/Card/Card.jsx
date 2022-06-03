import styles from './Card.module.css';
import PropTypes from 'prop-types';
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
  on_demand,
  start_date,
  end_date,
  prize,
  level,
  onShare,
}) {
  const classes = clsx(styles.container, { [styles.light]: variant === 'light' });
  const titleClasses = clsx('body-short-01--bold', styles.title);
  const subTitleClasses = clsx('caption', styles.subtitle);
  const descriptionClasses = clsx('body-long-02', styles.description);
  const levelClasses = clsx('caption', styles.level);
  const prizeClasses = clsx('caption', styles.prize);
  const footerClasses = clsx('caption', styles.footer);
  const hasDate = end_date && start_date;
  const showFooter = online || location || on_demand || hasDate;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={classes}>
        {image && (
          <div className={styles.header}>
            <img src={image} alt={title} width="200" height="150" className={styles.image} />
            {onShare && (
              <button
                className={styles.shareBtn}
                onClick={(e) => {
                  e.preventDefault();
                  onShare();
                }}
              >
                <img src="/icons/share.svg" alt="Share" />
                Share
              </button>
            )}
          </div>
        )}

        <h2 className={titleClasses}>{title}</h2>

        {subtitle && <h3 className={subTitleClasses}>{subtitle}</h3>}

        {description && <p className={descriptionClasses}>{description}</p>}

        {level && <div className={levelClasses}>{level}</div>}

        {prize && (
          <div className={prizeClasses}>
            <Svg height="18" width="18" href="/icons/prize.svg" title="prize icon" />
            {prize} in prizes
          </div>
        )}

        {showFooter && (
          <div className={footerClasses}>
            {/* If online = true or location exist */}
            {(online || location) && (
              <span>
                {online ? (
                  <Svg height="20" width="20" href="/icons/online.svg" title="online icon" />
                ) : (
                  location && <Svg height="20" width="20" href="/icons/location.svg" title="location icon" />
                )}
                {location || 'Online'}
              </span>
            )}

            {/* If date exist and ensure both date and u=on demand don't exist at the same time */}
            {hasDate && !on_demand && (
              <span>
                <Svg height="20" width="20" href="/icons/calender.svg" title="calender icon" />
                {dayjs(start_date).format('MMM D')}
                &nbsp; - &nbsp;
                {dayjs(end_date).format('MMM D, YYYY')}
              </span>
            )}
            {on_demand && !hasDate && <span>{'On-demand'}</span>}
          </div>
        )}
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
  on_demand: PropTypes.bool,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  prize: PropTypes.string,
  href: PropTypes.string.isRequired,
  level: PropTypes.string,
  onShare: PropTypes.func,
};

export default Card;
