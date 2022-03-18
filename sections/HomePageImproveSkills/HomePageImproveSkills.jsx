import CardWithArrow from '@/components/CardWithArrow';
import buildData from '@/data/build.yaml';
import styles from './HomePageImproveSkills.module.css';
import clsx from 'clsx';

function HomePageImproveSkills() {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={clsx('h-400', styles.title)}>Improve your skills on the field</h2>
        <p className={clsx('body-short-2', styles.description)}>Want to experiment first, ask questions later?</p>
      </div>
      <div className={styles.categories}>
        {buildData.categories.map((category, index) => (
          <CardWithArrow key={index} href={category.href} title={category.name} description={category.overview} />
        ))}
      </div>
    </section>
  );
}

export default HomePageImproveSkills;
