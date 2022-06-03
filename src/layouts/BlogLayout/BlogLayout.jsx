import PropTypes from 'prop-types';
import styles from './BlogLayout.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import NavLink from '@/components/NavLink';
import { useEffect, useState } from 'react';
import Overlay from '@/components/Overlay';
import FloatingButton from '@/components/FloatingButton';
import { StateProvider } from 'src/context/StateProvider';
import ChapterOverview from './ChapterOverview';

function BlogLayout({ children, pages }) {
  const [headings, setHeadings] = useState([]);
  const [articleOverview, setArticleOverview] = useState(false);
  const [chapterseOverview, setChaptersOverview] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const sortedPages = pages?.sort((a, b) => a.data.sidebar_position - b.data.sidebar_position);

  const current_sidebar_position = pages?.find((page) => page.slug === slug).data.sidebar_position;

  const prev_page = sortedPages?.find((page) => page.data.sidebar_position === current_sidebar_position - 1);

  const next_page = sortedPages?.find((page) => page.data.sidebar_position === current_sidebar_position + 1);

  const toggleOptions = (value) => {
    setArticleOverview(value);
    setChaptersOverview(value);
  };

  useEffect(() => {
    let headingsElements = Array.from(document.querySelectorAll('h2'));
    headingsElements = headingsElements.map((heading) => {
      return {
        id: heading.id,
        innerHTML: heading.innerHTML,
      };
    });

    setHeadings(headingsElements);
  }, [children]);

  return (
    <StateProvider>
      <Overlay showOverlay={articleOverview || chapterseOverview} isOverview={true} toggleMenu={toggleOptions} />
      {headings.length && <FloatingButton title="chapters" triggerPanel={setChaptersOverview} />}
      {pages && <FloatingButton title="articles" triggerPanel={setArticleOverview} />}
      <div className={styles.container}>
        <div className={clsx(styles.leftSidebar, { [styles.mobile]: articleOverview })}>
          {pages && (
            <>
              <div className={styles.sidebar__header}>Getting started</div>
              {sortedPages.map((page) => (
                <Link key={page.slug} href={page.slug} passHref>
                  <a
                    onClick={() => toggleOptions(false)}
                    className={clsx('btn', styles.leftSidebar__link, slug === page.slug && styles.active)}
                  >
                    {page.data.title}
                  </a>
                </Link>
              ))}
            </>
          )}
        </div>
        <ChapterOverview headings={headings} chapterseOverview={chapterseOverview} toggleOptions={toggleOptions} />
        <div className={styles.content_wrapper}>
          <div className={styles.content} id="blog-content">
            {children}
          </div>
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

            {!next_page && (
              <div>
                <NavLink
                  icon="arrow-right.svg"
                  type="outline"
                  iconPosition="right"
                  text={`Next: Go to Learn`}
                  to={'/learn'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </StateProvider>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.node,
  pages: PropTypes.array,
};

export default BlogLayout;
