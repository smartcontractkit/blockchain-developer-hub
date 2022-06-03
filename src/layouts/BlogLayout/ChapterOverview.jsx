import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './BlogLayout.module.css';
import Link from 'next/link';
import { useStateValue } from 'src/context/StateProvider';
import { useEffect } from 'react';
import { SET_BLOG_HEADINGS } from '@/context/types';

export default function ChapterOverview({ headings, chapterseOverview, toggleOptions }) {
  const [{ visible }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({ type: SET_BLOG_HEADINGS, payload: headings });
  }, [headings.length]);

  return (
    <div className={clsx(styles.rightSidebar, { [styles.mobile]: chapterseOverview })}>
      <div className={styles.sidebar__header}>On this page</div>
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
    </div>
  );
}

ChapterOverview.propTypes = {
  headings: PropTypes.array.isRequired,
  toggleOptions: PropTypes.func.isRequired,
  chapterseOverview: PropTypes.bool.isRequired,
};
