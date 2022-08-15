import NavBar from '@/components/NavBar';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

export default function DefaultLayout({ children }) {
  const { pathname } = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const defaultNavbarPathNames = {
      home: '/',
    };
    if (pathname === defaultNavbarPathNames.home) {
      setIsSticky(false);
    } else if (!isSticky) {
      setIsSticky(true);
    }
    return () => setIsSticky(true);
  }, [pathname, isSticky]);
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <NavBar isSticky={isSticky} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
