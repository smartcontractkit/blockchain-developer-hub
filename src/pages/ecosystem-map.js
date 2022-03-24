import ExploreMapBanner from '@/components/ExploreMapBanner';
import styles from '@/styles/pages/EcosystemMap.module.css';

function EcosystemMap() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ExploreMapBanner
          title="The Smart Contract Ecosystem"
          description="The landscape for smart contract developers consists of multiple related tools and technologies. Explore the ecosystem map to get familiar with the tooling landscape. Then view the Blockchain developer roadmap to learn how to become a blockchain developer."
          isHomePage={false}
        />
      </div>
    </section>
  );
}

export default EcosystemMap;
