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
  const isActive = (path, to) => {
    if (path.split('/')[1] === to.split('/')[1]) {
      return true;
    }
    return false;
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav_contents}>
          <Link href="/">
            <a className={styles.logo}>Blockchain Developer Hub</a>
          </Link>

          <ul className={styles.nav_links}>
            {links.map((res, index) => (
              <li key={index}>
                <NavLink text={res.text} to={res.to} type="link" active={isActive(pathname, res.to)} />
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/thisdot/blockchain-developer-hub"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githublogo}
          >
            <img src="/icons/github-logo.svg" width="24" height="24" alt="github logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}
