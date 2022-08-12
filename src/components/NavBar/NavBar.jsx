import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLink from '@/components/NavLink';
import styles from './NavBar.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import Overlay from '@/components/Overlay';
import navbarLinks from '@/data/navbarLinks.yaml';

import GithubLogo from '@/icons/github.svg';

const links = navbarLinks.items;

export default function NavBar({ isSticky }) {
  const bodyRef = useRef();
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isBlogPage, setIsBlogPage] = useState(false);
  const { pathname } = useRouter();
  const isActive = (path, href) => {
    if (path.split('/')[1] === href.split('/')[1]) {
      return true;
    }
    return false;
  };
  const toggleMenuLink = (value) => {
    bodyRef.current.style.overflow = value ? 'hidden' : 'auto';
    setShowNavLinks(value);
  };

  useEffect(() => {
    const blogLinks = ['/blockchain101', '/ship'];
    const result = blogLinks.find((res) => pathname.match(new RegExp(res, 'gi')));
    setIsBlogPage(result ? true : false);
  }, [pathname]);

  useEffect(() => {
    bodyRef.current = document.body;
  }, []);
  return (
    <nav className={clsx(styles.nav, { [styles.skicky]: isSticky })}>
      <div className={clsx(styles.container, { [styles.blog]: isBlogPage })}>
        <Overlay showOverlay={showNavLinks} toggleMenu={toggleMenuLink} />
        <div className={styles.nav_contents}>
          <button className={styles.menu_btn} onClick={() => toggleMenuLink(!showNavLinks)}>
            <img src={`/icons/${showNavLinks ? 'close.svg' : 'menu.svg'}`} alt="menu icon" />
          </button>
          <Link href="/">
            <a className={styles.logo} onClick={() => toggleMenuLink(false)}>
              <img src="/logos/logo.png" alt="blockchain logo" />
            </a>
          </Link>

          <ul className={clsx(styles.nav_links, { [styles.mobile]: showNavLinks })}>
            {links.map((res, index) => (
              <li key={index} onClick={() => toggleMenuLink(false)}>
                <NavLink text={res.name} to={res.href} type="link" active={isActive(pathname, res.href)} />
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/smartcontractkit/blockchain-developer-hub"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githublogo}
          >
            <span className="btn-sm--extra-bold">Contribute</span>
            <GithubLogo />
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
