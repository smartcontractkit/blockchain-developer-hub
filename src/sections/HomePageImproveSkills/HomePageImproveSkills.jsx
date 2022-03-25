import React from 'react';
import CardWithArrow from '@/components/CardWithArrow';
import buildData from '@/data/build.yaml';
import styles from './HomePageImproveSkills.module.css';
import clsx from 'clsx';

function HomePageImproveSkills() {
  const data = ['Hackathons', 'Workshops'];

  return (
    <section className={styles.container}>
      <div>
        <h2 className={clsx('h-400', styles.title)}>Improve your skills on the field</h2>
        <p className={clsx('body-short-2', styles.description)}>Want to experiment first, ask questions later?</p>
      </div>
      <div className={styles.categories}>
        {buildData.categories.map((category, index) => (
          <React.Fragment key={index}>
            {data.indexOf(category.name) > -1 && (
              <CardWithArrow key={index} href={category.href} title={category.name} description={category.overview} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default HomePageImproveSkills;
