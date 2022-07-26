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
import CardWithArrow from '@/components/CardWithArrow';
import CardWithLogo from '@/components/CardWithLogo/CardWithLogo';

function HomeExplore() {
  const [randomCourses, setRandomCourses] = useState([]);
  const [randomTutorials, setRandomTutorials] = useState([]);

  useEffect(() => {
    const courses = learnData.resources.map((resource) => resource.courses.data);
    const coursesArray = [].concat(...courses);
    const randomCourses = getRandomItemsFromArray(coursesArray, 2);

    const tutorials = learnData.resources.map((resource) => resource.tutorials.data);
    const tutorialsArray = [].concat(...tutorials);
    const randomTutorials = getRandomItemsFromArray(tutorialsArray, 3);

    setRandomCourses(randomCourses);
    setRandomTutorials(randomTutorials);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.header}>
          <div className={styles.header__left}>
            <h2 className={clsx('h-300', styles.title)}>
              <span>Explore how you can develop your</span> blockchain dev skills
            </h2>
            <div className={clsx('text-lg--long', styles.description)}>
              Jump in with these top tutorials, projects, and courses, or browse the full library on Learn.
            </div>
          </div>
          <div className={styles.learn_tracks}>
            <span className={styles.tracks_label}>Learn tracks</span>
            <div className={styles.links}>
              {learnData.resources.map((resource) => (
                <CardWithLogo
                  key={resource.id}
                  href={`/learn#${resource.id}`}
                  height={120}
                  link_text={resource.name}
                  logo={resource.logo}
                  isHomePage={true}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div>
            <h3 className={clsx('h-200', styles.subtitle)}>Dive in learning with courses</h3>
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
          </div>
          <div>
            <h3 className={clsx('h-200', styles.subtitle)}>Or check tutorials</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeExplore;
