import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@/components/Card';
import styles from './LearnCrypto.module.css';
import ShareModal from '@/components/ShareModal';
import { useState } from 'react';
import NoItemPlaceholder from '@/components/NoItemPlaceholder';
import HeadingHash from '@/components/HeadingHash';

function LearnCrypto({ id, name, logo, logoAlt, courses, tutorials }) {
  const headingClasses = clsx('subtitle-bold', styles.headings);
  const overviewClasses = clsx('text-md--long', styles.overview);
  const [shareItem, setShareItem] = useState(null);

  return (
    <div id={id} className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.sectionHeading}>
          <h2 className="subtitle-bold">{name}</h2>
          <img src={logo} alt={logoAlt} className={styles.logo} />
        </div>
        {courses && (
          <div id={`${id}-courses`}>
            <h3 className={headingClasses}>
              <HeadingHash to={courses.href} />
              Courses
            </h3>
            {courses.overview && <p className={overviewClasses}>{courses.overview}</p>}
            {courses.data ? (
              <div className={styles.cards}>
                {courses.data.map(({ title, author, image, level, description, href }, index) => (
                  <Card
                    title={title}
                    subtitle={author}
                    description={description}
                    level={level}
                    image={image}
                    href={href}
                    key={index}
                    onShare={() => setShareItem(href)}
                  />
                ))}
              </div>
            ) : (
              <NoItemPlaceholder />
            )}
          </div>
        )}

        {tutorials && (
          <div id={`${id}-tutorials`}>
            <h3 className={headingClasses}>
              <HeadingHash to={tutorials.href} />
              Tutorials
            </h3>
            {tutorials.overview && <p className={overviewClasses}>{tutorials.overview}</p>}
            {tutorials.data ? (
              <div className={styles.cards}>
                {tutorials.data.map(({ title, author, description, href }, index) => (
                  <Card
                    title={title}
                    subtitle={author}
                    href={href}
                    description={description}
                    onShare={() => setShareItem(href)}
                    key={index}
                  />
                ))}
              </div>
            ) : (
              <NoItemPlaceholder />
            )}
          </div>
        )}
      </div>
      {shareItem && <ShareModal url={shareItem} onClose={() => setShareItem(null)} />}
    </div>
  );
}

LearnCrypto.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  courses: PropTypes.object,
  tutorials: PropTypes.object,
};

export default LearnCrypto;
