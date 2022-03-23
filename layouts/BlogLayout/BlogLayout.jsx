import PropTypes from 'prop-types';
import styles from './BlogLayout.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import NavLink from '@/components/NavLink';

function BlogLayout({ children, pages }) {
  const router = useRouter();
  const { slug } = router.query;

  const sortedPages = pages?.sort((a, b) => a.data.sidebar_position - b.data.sidebar_position);

  const current_sidebar_position = pages?.find((page) => page.slug === slug).data.sidebar_position;

  const prev_page = sortedPages?.find((page) => page.data.sidebar_position === current_sidebar_position - 1);

  const next_page = sortedPages?.find((page) => page.data.sidebar_position === current_sidebar_position + 1);

  return (
    <div className={styles.container}>
      <div className={styles.leftSidebar}>
        {pages && (
          <>
            <div className={styles.leftSidebar__header}>Getting started</div>
            {sortedPages.map((page) => (
              <Link key={page.slug} href={page.slug} passHref>
                <a className={clsx('btn', styles.leftSidebar__link, slug === page.slug && styles.active)}>
                  {page.data.title}
                </a>
              </Link>
            ))}
          </>
        )}
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <div>
            {prev_page && (
              <NavLink
                icon="arrow-left.svg"
                type="outline"
                iconPosition="left"
                text={`Previous: ${prev_page.data.title}`}
                to={prev_page.slug}
              />
            )}
          </div>
          <div>
            {next_page && (
              <NavLink
                icon="arrow-right.svg"
                type="outline"
                iconPosition="right"
                text={`Next: ${next_page.data.title}`}
                to={next_page.slug}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.rightSidebar}></div>
    </div>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.node,
  pages: PropTypes.array,
};

export default BlogLayout;
