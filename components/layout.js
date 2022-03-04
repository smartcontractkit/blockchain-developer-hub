import NavBar from '@/components/NavBar';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
