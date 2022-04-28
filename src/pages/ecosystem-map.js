import AccordionContent from '@/components/AccordionContent';
import EcosystemAccordion from '@/components/EcosystemAccordion';
import ExploreMapBanner from '@/components/ExploreMapBanner';
import styles from '@/styles/pages/EcosystemMap.module.css';
import { useState } from 'react';

function EcosystemMap() {
  const [expanded, setExpanded] = useState('');
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ExploreMapBanner
          title="The Smart Contract Ecosystem"
          description="The landscape for smart contract developers consists of multiple related tools and technologies."
          isHomePage={false}
        />
      </div>
      <EcosystemAccordion expanded={expanded === 'id'} id="id" expandToggle={setExpanded}>
        <AccordionContent />
      </EcosystemAccordion>
    </section>
  );
}

export default EcosystemMap;
