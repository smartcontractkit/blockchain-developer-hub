import Link from 'next/link';
import styles from './NavLink.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Svg from '../Svg';

export default function NavLink({ to, type, icon, iconPosition, text, active, ...props }) {
  const classes = clsx(styles.navLink, styles[type], {
    active: active && type === 'link',
    [styles.iconLeft]: iconPosition === 'left',
    [styles.activeLink]: active,
  });

  return (
    <Link href={to}>
      <a {...props} className={classes}>
        <span>{text}</span>
        {icon && <Svg className={styles[`icon-${iconPosition}`]} height="20" width="20" href={`/icons/${icon}`} />}
      </a>
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'seconday', 'outline', 'link']).isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  text: PropTypes.string.isRequired,
};

NavLink.defaultProps = {
  iconPosition: 'left',
};
