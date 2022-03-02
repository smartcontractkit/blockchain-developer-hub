import Image from 'next/image';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import styles from './ArticleHeader.module.css';

function ArticleHeader({ datetime, title, image, author, role }) {
  return (
    <section>
      <span className={styles.publishDate}>
        Published on <time dateTime={datetime}>{dayjs(datetime).format('MMM D, YYYY')}</time>
      </span>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.author}>
        <div className={styles.author__imageContainer}>
          <Image src={image} height={50} width={50} alt={`Portrait of ${author}`} />
        </div>
        <div>
          <h2 className={styles.author__name}>{author}</h2>
          <small className={styles.author__role}>{role}</small>
        </div>
      </div>
    </section>
  );
}

ArticleHeader.propTypes = {
  datetime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ArticleHeader;
