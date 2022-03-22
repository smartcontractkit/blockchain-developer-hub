import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from '@/components/NavLink';
import styles from './NavBar.module.css';

const links = [
  {
    to: '/blockchain101/blockchain',
    text: 'Why Blockchain',
  },
  {
    to: '/learn',
    text: 'Learn',
  },
  {
    to: '/ecosystem-map',
    text: 'Ecosystem',
  },
  {
    to: '/build',
    text: 'Build',
  },
  {
    to: '/ship',
    text: 'Ship',
  },
];

export default function NavBar() {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav_contents}>
          <Link href="/">
            <a className={styles.logo}>DevHub</a>
          </Link>

          <ul className={styles.nav_links}>
            {links.map((res, index) => (
              <li key={index}>
                <NavLink text={res.text} to={res.to} type="link" active={pathname === res.to} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
