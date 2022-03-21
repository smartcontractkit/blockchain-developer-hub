import PropTypes from 'prop-types';
import styles from './BlogLayout.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

function BlogLayout({ children, pages }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.leftSidebar}>
        {pages && (
          <>
            <div className={styles.leftSidebar__header}>Getting started</div>
            {pages.map((page) => (
              <Link key={page.slug} href={page.slug} passHref>
                <a className={clsx('btn', styles.leftSidebar__link, slug === page.slug && styles.active)}>
                  {page.data.title}
                </a>
              </Link>
            ))}
          </>
        )}
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.rightSidebar}></div>
    </div>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.node,
  pages: PropTypes.array,
};

export default BlogLayout;
