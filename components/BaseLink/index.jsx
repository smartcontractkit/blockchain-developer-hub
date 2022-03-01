import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './BaseLink.module.css'

export default function BaseLink({
    to, 
    exact=false, 
    type, 
    icon, 
    iconPos, 
    text, 
    className='', 
  ...props 
  }) {
  // const { pathname } = useRouter();
  // console.log(pathname);
  const pathname = '/'
  const isActive = exact && type === 'link' && (pathname === to  || pathname.startsWith(to)) ? true : false;

  if (isActive) {
      className += ' active';
  }
  return (
    <Link href={to}>
      <a {...props} className={styles[type] + ' ' + className}>
        {
          (icon && iconPos === 'left') && (
            <object
            className='icon-left'
            type='image/svg+xml'
            height="20"
            width="20"
            data={`/icons/${icon}`}
          />
          )
        }
        <span>
          { text }
        </span>
        {
          (icon && iconPos === 'right') && (
            <object
            className='icon-right'
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
