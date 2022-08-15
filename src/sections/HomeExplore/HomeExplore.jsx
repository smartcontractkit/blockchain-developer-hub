import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import clsx from 'clsx';
import learnData from '@/data/learn.yaml';
import homeData from '@/data/home.yaml';
import { getRandomItemsFromArray } from '@/helpers/getRandomItemsFromArray';
import styles from './HomeExplore.module.css';
import TutorialCard from '@/components/TutorialCard';
import Card from '@/components/Card';
import CardWithLogo from '@/components/CardWithLogo';
import Link from 'next/link';
import Testimonial from '@/components/Testimonial';
import ArrowRightRounded from '@/icons/arrow-right-white-rounded.svg';

function HomeExplore() {
  const [randomCourses, setRandomCourses] = useState([]);
  const [randomTutorials, setRandomTutorials] = useState([]);
  const linkTextClasses = clsx('btn-sm--extra-bold', styles.more_link_text);

  const testimonial = homeData.testimonial;

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
      <div className={styles.inner_container}>
        <div className={styles.header}>
          <div className={styles.header__left}>
            <h3 className={clsx('h-300', styles.title)}>
              <span>Explore how you can develop your</span> blockchain dev skills
            </h3>
            <div className={clsx('text-lg--long', styles.description)}>
              Jump in with these top tutorials, projects, and courses, or browse the full library on Learn.
            </div>
          </div>
          <div className={styles.learn_tracks}>
            <span className={clsx('overline--extra-bold', styles.tracks_label)}>Learn tracks</span>
            <div className={styles.links}>
              {learnData.resources.map((resource) => (
                <CardWithLogo
                  key={resource.id}
                  href={`/learn#${resource.id}`}
                  height={120}
                  link_text={resource.name}
                  logo={resource.logo}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.testimonial_wrapper}>
          <Testimonial
            title={testimonial.title}
            content={testimonial.content}
            source={testimonial.source}
            icon={testimonial.icon}
          />
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
                {'More courses'} <ArrowRightRounded />
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
                {'More tutorials'} <ArrowRightRounded />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeExplore;
