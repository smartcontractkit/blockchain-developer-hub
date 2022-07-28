import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from '@/components/NavLink';
import styles from './NavBar.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import Overlay from '@/components/Overlay';

const links = [
  {
    to: '/blockchain101/blockchain',
    text: 'Blockchain 101',
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

export default function NavBar({ isSticky }) {
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
    <nav className={clsx(styles.nav, { [styles.skicky]: isSticky })}>
      <div className={styles.container}>
        <Overlay showOverlay={showNavLinks} toggleMenu={toggleMenuLink} />
        <div className={styles.nav_contents}>
          <button className={styles.menu_btn} onClick={() => toggleMenuLink(!showNavLinks)}>
            <img src={`/icons/${showNavLinks ? 'close.svg' : 'menu.svg'}`} alt="menu icon" />
          </button>
          <Link href="/">
            <a className={styles.logo} onClick={() => toggleMenuLink(false)}>
              <img src="/images/favicon-32x32.png" alt="blockchain logo" />
              <span className="text-lg--short-semi">
                blockchain
                <br />
                education
              </span>
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
            <span className="btn--extra-bold">Contribute</span>
            <img src="/icons/github.svg" width="24" height="24" alt="github logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  isSticky: PropTypes.bool,
};

NavBar.defaultProps = {
  isSticky: false,
};
