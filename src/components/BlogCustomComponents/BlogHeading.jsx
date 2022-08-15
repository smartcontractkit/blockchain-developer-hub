import Link from 'next/link';
import styles from '@/styles/MDX.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const CustomH2 = ({ id, ...rest }) => {
  const blog_heading = clsx('h-100', styles.blog_heading);
  if (id) {
    return (
      <Link href={`#${id}`} passHref>
        <a className={blog_heading}>
          <span>#</span>
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
