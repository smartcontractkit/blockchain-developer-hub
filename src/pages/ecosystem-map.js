import ExploreMapBanner from '@/components/ExploreMapBanner';
import styles from '@/styles/pages/EcosystemMap.module.css';

function EcosystemMap() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ExploreMapBanner
          title="The Smart Contract Ecosystem"
          description="The landscape for smart contract developers consists of multiple related tools and technologies."
          isHomePage={false}
        />
      </div>
    </section>
  );
}

export default EcosystemMap;
