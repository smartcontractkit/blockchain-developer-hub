import data from '@/data/build.yaml';
import removePastEvent from '@/helpers/removePastEvent';
import BuildPageSection from '@/sections/BuildPageSection';
import styles from '@/styles/pages/BuildPage.module.css';
function Build() {
  const { categories } = data;
  return (
    <div className={styles.container}>
      {categories.map(({ name, overview, items }, index) => (
        <BuildPageSection key={index} name={name} overview={overview} items={removePastEvent(items)} />
      ))}
    </div>
  );
}

export default Build;
