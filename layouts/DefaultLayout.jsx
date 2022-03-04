import NavBar from '@/components/NavBar';
import PropTypes from 'prop-types';

export default function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
