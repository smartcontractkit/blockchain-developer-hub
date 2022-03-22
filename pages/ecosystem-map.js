import ExploreMapBanner from '@/components/ExploreMapBanner';
import styles from '@/styles/pages/EcosystemMap.module.css';

function EcosystemMap() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ExploreMapBanner
          title="The Smart Contract Ecosystem Map"
          description="The ecosystem tools map outlines the entire smart contract developer ecosystem, and all of the tools andproducts smart contract developers may need to rely on."
          isHomePage={false}
        />
      </div>
    </section>
  );
}

export default EcosystemMap;
