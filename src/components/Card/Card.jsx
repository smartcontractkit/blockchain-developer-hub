import styles from './Card.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Svg from '@/components/Svg';
import dayjs from 'dayjs';
import ShareIcon from '@/icons/share.svg';

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
  const levelText = level ? level.toLowerCase() : '';
  const titleClasses = clsx('text-lg--short-semi', styles.title);
  const subTitleClasses = clsx('caption--semi-bold', styles.subtitle);
  const descriptionClasses = clsx('text-md--long', styles.description);
  const levelClasses = clsx('caption--semi-bold', styles.level, styles[levelText]);
  const prizeClasses = clsx('caption--semi-bold', styles.prize);
  const footerClasses = clsx('caption--semi-bold', styles.footer);
  const hasDate = end_date && start_date;
  const showFooter = online || location || on_demand || hasDate;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={classes}>
        {image && (
          <div className={styles.header}>
            <img src={image} alt="" width="100%" height="150" className={styles.image} />
          </div>
        )}
        <div className={styles.contents}>
          <div>
            {subtitle && <span className={subTitleClasses}>{subtitle}</span>}
            <h3 className={titleClasses}>
              <span>{title}</span>
              {onShare && (
                <button
                  className={styles.shareBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    onShare();
                  }}
                >
                  <ShareIcon />
                </button>
              )}
            </h3>

            {description && <p className={descriptionClasses}>{description}</p>}
          </div>

          <div>
            {level && <span className={levelClasses}>{level}</span>}

            {showFooter && (
              <div className={footerClasses}>
                {/* If online = true or location exist */}
                {(online || location) && (
                  <span>
                    <Svg height="18" width="18" href="/icons/location.svg" title="location icon" />
                    {location || 'Online'}
                  </span>
                )}

                {/* If date exist and ensure both date and on demand don't exist at the same time */}
                <span>
                  <Svg height="18" width="18" href="/icons/calender.svg" title="calender icon" />
                  {hasDate && !on_demand && (
                    <>
                      {dayjs(start_date).format('MMM D')}
                      &nbsp; - &nbsp;
                      {dayjs(end_date).format('MMM D, YYYY')}
                    </>
                  )}
                  {on_demand && !hasDate && 'On-demand'}
                </span>

                {prize && (
                  <span className={prizeClasses}>
                    <Svg height="18" width="18" href="/icons/prize.svg" title="prize icon" />
                    {prize} in prizes
                  </span>
                )}
              </div>
            )}
          </div>
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
  on_demand: PropTypes.bool,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  prize: PropTypes.string,
  href: PropTypes.string.isRequired,
  level: PropTypes.string,
  onShare: PropTypes.func,
};

export default Card;
