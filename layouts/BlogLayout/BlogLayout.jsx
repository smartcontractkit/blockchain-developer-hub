import PropTypes from 'prop-types';
import styles from './BlogLayout.module.css';

function BlogLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

BlogLayout.propTypes = {
  children: PropTypes.node,
};

export default BlogLayout;
