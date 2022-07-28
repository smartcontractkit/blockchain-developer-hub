import ExploreMapBanner from '@/components/ExploreMapBanner';
import styles from '@/styles/pages/EcosystemMap.module.css';

import clsx from 'clsx';

function EcosystemMap() {
  const titleClasses = clsx('h-600', styles.title);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ExploreMapBanner
          description="The landscape for smart contract developers consists of multiple related tools and technologies."
          isHomePage={false}
        >
          <h1 className={titleClasses}>
            <span>The smart contract</span> ecosystem map
          </h1>
        </ExploreMapBanner>
      </div>
    </section>
  );
}

export default EcosystemMap;
