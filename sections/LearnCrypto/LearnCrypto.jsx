import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@/components/Card';
import TutorialCard from '@/components/TutorialCard';
import styles from './LearnCrypto.module.css';

function LearnCrypto({ id, name, logo, logoAlt, courses, tutorials }) {
  const headingClasses = clsx('subtitle-01', styles.headings);
  const overviewClasses = clsx('body-long-02', styles.overview);

  return (
    <div id={id} className={styles.container}>
      <div className={styles.sectionHeading}>
        <div className={styles.sectionHeadingContent}>
          <div>
            <h1>{name}</h1>
          </div>
          <img src={logo} alt={logoAlt} className={styles.logo} />
        </div>
      </div>

      <div className={styles.mainContent}>
        {courses && (
          <div>
            <h2 className={headingClasses}>Courses</h2>
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
                  />
                ))}
              </div>
            ) : (
              <div className={styles.commingSoon}>Content comming soon...</div>
            )}
          </div>
        )}

        {tutorials && (
          <div>
            <h2 className={headingClasses}>Tutorials</h2>
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
