import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './NavLink.module.css'
import PropTypes from 'prop-types'


export default function NavLink({
    to, 
    type, 
    icon, 
    iconPos, 
    text,
    active,
    className, 
  ...props 
  }) {
  return (
    <Link href={to}>
      <a {...props} className={['navLink', styles[type], className, (active && type === 'link' ? 'active':''), (iconPos === 'left' ? 'row-reverse': '')].join(' ')}>
       
        <span>
          { text }
        </span>
        {
          icon &&  (
            <object
            className={`icon-${iconPos}`}
            type='image/svg+xml'
            height="20"
            width="20"
            data={`/icons/${icon}`}
          />
          )
        }
      </a>
    </Link>
  )
}


NavLink.prototype = {
  to: PropTypes.string.isRequired, 
  exact: PropTypes.bool,
  active: PropTypes.bool,
  type:PropTypes.oneOf(['primary', 'seconday', 'outline', 'link']).isRequired, 
  icon: PropTypes.string, 
  iconPos: PropTypes.oneOf(['left', 'right']),
  text: PropTypes.string.isRequired, 
}

NavLink.defaultProps = {
  iconPos: 'left',
}