import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import PropTypes from 'prop-types';
import DefaultLayout from '@/layouts/DefaultLayout';

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
