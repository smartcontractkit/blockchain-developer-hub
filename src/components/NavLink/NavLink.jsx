import Link from 'next/link';
import styles from './NavLink.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Svg from '../Svg';

export default function NavLink({ to, type, icon, iconPosition, text, active, ...props }) {
  const classes = clsx('btn-sm--extra-bold', styles.navLink, styles[type], {
    active: active && type === 'link',
    [styles.iconLeft]: iconPosition === 'left',
    [styles.activeLink]: active,
  });

  const iconsName = icon?.split('.')[0];

  return (
    <Link href={to} passHref>
      <a {...props} className={classes}>
        <span>{text}</span>
        {icon && (
          <Svg
            className={styles[`icon-${iconPosition}`]}
            height="20"
            width="20"
            href={`/icons/${icon}`}
            title={iconsName}
          />
        )}
      </a>
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'link']).isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  text: PropTypes.string.isRequired,
};

NavLink.defaultProps = {
  iconPosition: 'left',
};
