import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import clsx from 'clsx';
import Link from 'next/link';
import learnData from '@/data/learn.yaml';
import { getRandomItemsFromArray } from '@/helpers/getRandomItemsFromArray';
import styles from './HomeExplore.module.css';
import TutorialCard from '@/components/TutorialCard';
import Card from '@/components/Card';
import Svg from '@/components/Svg';

function HomeExplore() {
  const [randomCourses, setRandomCourses] = useState([]);
  const [randomTutorials, setRandomTutorials] = useState([]);
  const linkTextClasses = clsx('btn-sm--extra-bold', styles.more_link_text);

  useEffect(() => {
    const courses = learnData.resources.map((resource) => resource.courses.data);
    const coursesArray = [].concat(...courses);
    const randomCourses = getRandomItemsFromArray(coursesArray, 2);

    const tutorials = learnData.resources.map((resource) => resource.tutorials.data);
    const tutorialsArray = [].concat(...tutorials);
    const randomTutorials = getRandomItemsFromArray(tutorialsArray, 4);

    setRandomCourses(randomCourses);
    setRandomTutorials(randomTutorials);
  }, []);

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
                    <Svg
                      height="20"
                      width="20"
                      href="/icons/arrow-right-lightblue.svg"
                      title="arrow right lightblue icon"
                    />{' '}
                    {resource.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.main_contents}>
            <h3 className={clsx('overline--extra-bold', styles.subtitle)}>Dive in learning with courses</h3>
            <div className={styles.courses}>
              {randomCourses.map((course, index) => (
                <Card
                  key={index}
                  variant="light"
                  title={course.title}
                  image={course.image}
                  subtitle={course.author}
                  href={course.href}
                  level={course.level}
                />
              ))}
            </div>
            <Link href="/learn" passHref>
              <a className={linkTextClasses}>
                {' '}
                {'More courses'} <img src="/icons/arrow-right-white-rounded.svg" alt="text link icon" />
              </a>
            </Link>
          </div>
          <div className={styles.main_contents}>
            <h3 className={clsx('overline--extra-bold', styles.subtitle)}>check tutorials</h3>
            <div className={styles.tutorials}>
              {randomTutorials.map((tutorial, index) => (
                <TutorialCard
                  key={index}
                  heading={tutorial.title}
                  href={tutorial.href}
                  author={tutorial.author}
                  date={dayjs(tutorial.date).format('MMM D, YYYY')}
                />
              ))}
            </div>
            <Link href="/learn" passHref>
              <a className={linkTextClasses}>
                {' '}
                {'More tutorials'} <img src="/icons/arrow-right-white-rounded.svg" alt="text link icon" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeExplore;
