import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './NavLink.module.css'
import PropTypes from 'prop-types'


export default function NavLink({
    to, 
    exact, 
    type, 
    icon, 
    iconPos, 
    text, 
    className, 
  ...props 
  }) {
  const { pathname } = useRouter();
  const router = useRouter();
  console.log(pathname);
  console.log(router);
  // const pathname = '/'
  const isActive = exact && type === 'link' ? pathname === to  : pathname.startsWith(to);

  if (isActive) {
      className += ' active';
  }
  return (
    <Link href={to}>
      <a {...props} className={styles[type] + ' ' + className + ' ' + (iconPos === 'left' ? 'row-reverse': '') }>
       
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
  type:PropTypes.oneOf(['primary', 'seconday', 'outline', 'link']).isRequired, 
  icon: PropTypes.string, 
  iconPos: PropTypes.string, 
  text: PropTypes.string.isRequired, 
}

NavLink.defaultProps = {
  exact: false,
  className: '',
}