import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@/components/Card';
import TutorialCard from '@/components/TutorialCard';
import styles from './LearnCrypto.module.css';
import ShareModal from '@/components/ShareModal';
import { useState } from 'react';
import HeadingHash from '@/components/HeadingHash';
function LearnCrypto({ id, name, logo, logoAlt, courses, tutorials }) {
  const headingClasses = clsx('subtitle-01', styles.headings);
  const overviewClasses = clsx('body-long-02', styles.overview);
  const [shareItem, setShareItem] = useState(null);

  return (
    <div id={id} className={styles.container}>
      <div className={styles.sectionHeading}>
        <div className={styles.sectionHeadingContent}>
          <div>
            <h2 className="h-300">{name}</h2>
          </div>
          <img src={logo} alt={logoAlt} className={styles.logo} />
        </div>
      </div>

      <div className={styles.mainContent}>
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
              <div className={styles.commingSoon}>Content comming soon...</div>
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
              <div>
                {tutorials.data.map(({ title, author, date, description, href }, index) => (
                  <div className={styles.tutorial} key={index}>
                    <TutorialCard
                      heading={title}
                      author={author}
                      date={date}
                      href={href}
                      variant="gray"
                      description={description}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.commingSoon}>Content comming soon...</div>
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
