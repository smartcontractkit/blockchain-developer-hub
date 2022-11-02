import React from 'react';
import styles from './Footer.module.css';
import Logo from '@/icons/logo-icon.svg';
import Link from 'next/link';
import clsx from 'clsx';

export default function HomeFooter() {
  return (
    <div className={clsx(styles.container, styles.home)}>
      <div className={styles.home_footer_content}>
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <p className={clsx('text-md--short', styles.copyright)}>{new Date().getFullYear()} @Blockchain Education</p>
      </div>
    </div>
  );
}
