import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './BaseLink.module.css'

export default function BaseLink({ href, exact=false, type, children, className='', ...props }) {
  // const { pathname } = useRouter();
  // console.log(pathname);
  const pathname = '/'
  const isActive = exact && type === 'link' && (pathname === href  || pathname.startsWith(href)) ? true : false;

  if (isActive) {
    console.log('here');
      className += ' active';
  }
  return (
    <Link href={href}>
      <a {...props} className={styles[type] + ' ' + className}>
        { children }
      </a>
    </Link>
  )
}
