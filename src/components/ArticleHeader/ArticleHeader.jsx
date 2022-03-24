import Image from 'next/image';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ArticleHeader.module.css';

function ArticleHeader({ datetime, title, image, author, role }) {
  const publishDateClasses = clsx('body-short-02', styles.publishDate);
  const authorNameClasses = clsx('body-short-01--bold', styles.author__name);
  const authorRoleClasses = clsx('body-short-02', styles.author__role);
  const titleClasses = clsx('h-400', styles.title);
  const hasAuthorInfo = author && image && role;

  return (
    <section className={styles.container}>
      <span className={publishDateClasses}>
        Published on <time dateTime={datetime}>{dayjs(datetime).format('MMM D, YYYY')}</time>
      </span>
      <h1 className={titleClasses}>{title}</h1>

      {hasAuthorInfo && (
        <div className={styles.author}>
          <div className={styles.author__imageContainer}>
            <Image src={image} height={50} width={50} alt={`Portrait of ${author}`} />
          </div>
          <div>
            <h2 className={authorNameClasses}>{author}</h2>
            <small className={authorRoleClasses}>{role}</small>
          </div>
        </div>
      )}
    </section>
  );
}

ArticleHeader.propTypes = {
  datetime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.string,
};

export default ArticleHeader;
