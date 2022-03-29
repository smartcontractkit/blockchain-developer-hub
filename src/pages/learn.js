import LearnHero from '@/sections/LearnHero';
import data from '@/data/learn.yaml';
import LearnCrypto from '@/sections/LearnCrypto';
import styles from '@/styles/pages/LearnPage.module.css';
import PagePagination from '@/components/PagePagination';

function Learn() {
  const { resources } = data;
  return (
    <div className={styles.container}>
      <LearnHero />
      <section>
        {resources.map(({ id, name, logo, courses, tutorials }) => (
          <LearnCrypto
            key={id}
            id={id}
            name={name}
            logo={logo}
            logoAlt={`${name} Logo`}
            courses={courses}
            tutorials={tutorials}
          />
        ))}
      </section>
      <PagePagination text="Go to Ecosystem" link="/ecosystem-map" />
    </div>
  );
}

export default Learn;
