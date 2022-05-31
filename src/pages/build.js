import PagePagination from '@/components/PagePagination';
import data from '@/data/build.yaml';
import removePastEvent from '@/helpers/removePastEvent';
import BuildPageSection from '@/sections/BuildPageSection';
import styles from '@/styles/pages/BuildPage.module.css';
function Build() {
  const { categories } = data;
  return (
    <div className={styles.container}>
      {categories.map(({ name, overview, items, href }, index) => (
        <BuildPageSection key={index} name={name} overview={overview} href={href} items={removePastEvent(items)} />
      ))}
      <PagePagination text="Go to Ship" link="/ship" />
    </div>
  );
}

export default Build;
