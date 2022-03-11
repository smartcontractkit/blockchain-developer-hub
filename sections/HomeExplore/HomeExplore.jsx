import styles from './HomeExplore.module.css';
import Link from 'next/link';
import learnData from '@/data/learn.yaml';
import Svg from '@/components/Svg';
import clsx from 'clsx';
import Card from '@/components/Card';
import { getRandomItemsFromArray } from '@/helpers/getRandomItemsFromArray';
import dayjs from 'dayjs';
import TutorialCard from '@/components/TutorialCard';

function HomeExplore() {
  const courses = learnData.resources.map((resource) => resource.courses.data);
  const coursesArray = [].concat(...courses);
  const randomCourses = getRandomItemsFromArray(coursesArray, 4);

  const tutorials = learnData.resources.map((resource) => resource.tutorials.data);
  const tutorialsArray = [].concat(...tutorials);
  const randomTutorials = getRandomItemsFromArray(tutorialsArray, 4);

  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <div className={styles.header__left}>
            <h2 className={styles.title}>Explore how you can develop your skills</h2>
            <p className="body-long-01">
              Jump in with these top tutorials, projects, and courses, or browse the full library on Learn.
            </p>
          </div>
          <div>
            <span className={styles.tracksLabel}>Learn tracks</span>
            <div className={styles.links}>
              {learnData.resources.map((resource) => (
                <Link href={`/learn#${resource.id}`} key={resource.name} passHref>
                  <a className={styles.link}>
                    <Svg height="20" width="20" href="/icons/arrow-right-lightblue.svg" /> {resource.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div>
            <h3 className={clsx('h-200', styles.subtitle)}>Dive in learning with courses</h3>
            <div className={styles.courses}>
              {randomCourses.map((course) => (
                <Card
                  key={course.title}
                  variant="light"
                  title={course.title}
                  image={course.image}
                  subtitle={course.author}
                  href={course.href}
                  level={course.level}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className={clsx('h-200', styles.subtitle)}>Or check tutorials</h3>
            <div className={styles.tutorials}>
              {randomTutorials.map((tutorial) => (
                <TutorialCard
                  key={tutorial.title}
                  heading={tutorial.title}
                  author={tutorial.author}
                  date={dayjs(tutorial.date).format('MMM D, YYYY')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeExplore;
