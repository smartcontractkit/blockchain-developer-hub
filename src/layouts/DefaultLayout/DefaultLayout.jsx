import NavBar from '@/components/NavBar';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
