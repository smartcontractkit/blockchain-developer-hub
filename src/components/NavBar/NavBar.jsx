import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from '@/components/NavLink';
import styles from './NavBar.module.css';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';
import Overlay from '@/components/Overlay';

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
  const bodyRef = useRef();
  const [showNavLinks, setShowNavLinks] = useState(false);
  const { pathname } = useRouter();
  const isActive = (path, to) => {
    if (path.split('/')[1] === to.split('/')[1]) {
      return true;
    }
    return false;
  };
  const toggleMenuLink = (value) => {
    bodyRef.current.style.overflow = value ? 'hidden' : 'auto';
    setShowNavLinks(value);
  };

  useEffect(() => {
    bodyRef.current = document.body;
  }, []);
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Overlay showOverlay={showNavLinks} toggleMenu={toggleMenuLink} />
        <div className={styles.nav_contents}>
          <button className={styles.menu_btn} onClick={() => toggleMenuLink(!showNavLinks)}>
            <img src={`/icons/${showNavLinks ? 'close.png' : 'menu.png'}`} alt="menu icon" />
          </button>
          <Link href="/">
            <a className={styles.logo} onClick={() => toggleMenuLink(false)}>
              Blockchain Developer Hub
            </a>
          </Link>

          <ul className={clsx(styles.nav_links, { [styles.mobile]: showNavLinks })}>
            {links.map((res, index) => (
              <li key={index} onClick={() => toggleMenuLink(false)}>
                <NavLink text={res.text} to={res.to} type="link" active={isActive(pathname, res.to)} />
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/smartcontractkit/blockchain-developer-hub"
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
