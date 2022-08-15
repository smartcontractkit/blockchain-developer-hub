import React from 'react';
import CardWithArrow from '@/components/CardWithArrow';
import buildData from '@/data/build.yaml';
import styles from './HomePageImproveSkills.module.css';
import clsx from 'clsx';

function HomePageImproveSkills() {
  const data = ['Hackathon', 'Workshop'];

  return (
    <section className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.headings}>
          <h3 className={clsx('h-300', styles.title)}>
            <span>Want to</span> test your skills, <span>and ask questions later?</span>
          </h3>
          <div className={clsx('text-lg--long', styles.description)}>
            Improve skills on the field by gathering with cryto community members
          </div>
        </div>
        <div className={styles.categories}>
          {buildData.categories.map((category, index) => (
            <React.Fragment key={index}>
              {data.indexOf(category.name) > -1 && (
                <CardWithArrow
                  key={index}
                  href={category.href}
                  title={category.name}
                  link_text={category.link_text}
                  description={category.overview}
                >
                  <img src={category.icon} alt={`${category.name} icon`} />
                </CardWithArrow>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePageImproveSkills;
