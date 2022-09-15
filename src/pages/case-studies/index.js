import PagePagination from '@/components/PagePagination';
import data from '@/data/case-studies.yaml';
import removePastEvent from '@/helpers/removePastEvent';
import BuildPageSection from '@/sections/BuildPageSection';
import styles from '@/styles/pages/BuildPage.module.css';

function CaseStudies() {
  const { categories } = data;
  return (
    <div className={styles.container}>
      {categories.map(({ name, overview, items, href }, index) => (
        <BuildPageSection key={index} name={name} overview={overview} href={href} items={removePastEvent(items)} />
      ))}
      <PagePagination hasPadding={false} text="Ship" link="/ship" />
    </div>
  );
}

export default CaseStudies;
