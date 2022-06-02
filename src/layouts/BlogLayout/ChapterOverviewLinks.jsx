import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './BlogLayout.module.css';
import Link from 'next/link';
import { useStateValue } from 'src/context/StateProvider';

export default function ChapterOverviewLinks({ headings, toggleOptions }) {
  const [{ visible }] = useStateValue();
  return (
    <>
      {headings.map((heading) => (
        <Link key={heading.id} href={`#${heading.id}`} passHref>
          <a
            onClick={() => toggleOptions(false)}
            className={clsx('caption', styles.rightSidebar__link, {
              [styles.active]: visible.length && heading.id === visible[0],
            })}
          >
            {heading.innerHTML}
          </a>
        </Link>
      ))}
    </>
  );
}

ChapterOverviewLinks.propTypes = {
  headings: PropTypes.array.isRequired,
  toggleOptions: PropTypes.func.isRequired,
};
