import Link from 'next/link';
import styles from '@/styles/MDX.module.css';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import useToggleVisibility from '@/hooks/useToggleVisibility';

const CustomH2 = ({ id, ...rest }) => {
  const ref = useRef(null);
  useToggleVisibility(ref);

  if (id) {
    return (
      <Link href={`#${id}`} passHref>
        <a className={styles.blog_heading}>
          <h2 id={id} ref={ref} {...rest} />
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
