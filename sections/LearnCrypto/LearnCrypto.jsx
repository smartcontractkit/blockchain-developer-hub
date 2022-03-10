import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';

import Card from '@/components/Card';
import TutorialCard from '@/components/TutorialCard';
import styles from './LearnCrypto.module.css';

function LearnCrypto({ id, name, logo, logoAlt, courses, tutorials }) {
  const headingClasses = clsx('subtitle-01', styles.headings);
  const overviewClasses = clsx('body-long-02', styles.overview);

  return (
    <div id={id} className={styles.container}>
      {/* Todo: Header styling */}
      <div className={styles.sectionHeading}>
        <div className={styles.sectionHeadingContent}>
          <div>
            <h1>{name}</h1>
          </div>
          <div className={styles.logoContainer}>
            <Image src={logo} alt={logoAlt} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>

      {/* Todo: Body contents */}

      <div className={styles.mainContent}>
        {courses && (
          <div>
            <h2 className={headingClasses}>Courses</h2>
            {courses.overview && <p className={overviewClasses}>{courses.overview}</p>}
            {courses.data && (
              <div className={styles.cards}>
                {courses.data.map(({ title, author, image, level, description }, index) => (
                  <Card
                    title={title}
                    subtitle={author}
                    description={description}
                    level={level}
                    image={image}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {tutorials && (
          <div>
            <h2 className={headingClasses}>Tutorials</h2>
            {tutorials.overview && <p className={overviewClasses}>{tutorials.overview}</p>}
            {tutorials.data && (
              <div>
                {tutorials.data.map(({ title, author, date, description }, index) => (
                  <div className={styles.tutorial} key={index}>
                    <TutorialCard
                      heading={title}
                      author={author}
                      date={date}
                      variant="gray"
                      description={description}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
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
