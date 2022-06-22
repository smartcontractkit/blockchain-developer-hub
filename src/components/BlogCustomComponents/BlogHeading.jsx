import Link from 'next/link';
import styles from '@/styles/MDX.module.css';
import PropTypes from 'prop-types';

const CustomH2 = ({ id, ...rest }) => {
  if (id) {
    return (
      <Link href={`#${id}`} passHref>
        <a className={styles.blog_heading}>
          <h2 id={id} {...rest} />
        </a>
      </Link>
    );
  }
  return <h2 {...rest} />;
};

CustomH2.propTypes = {
  id: PropTypes.string,
};

export default CustomH2;
