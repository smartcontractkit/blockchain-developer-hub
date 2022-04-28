import AccordionContent from '@/components/AccordionContent';
import EcosystemAccordion from '@/components/EcosystemAccordion';
import ExploreMapBanner from '@/components/ExploreMapBanner';
import styles from '@/styles/pages/EcosystemMap.module.css';
import { useState } from 'react';

function EcosystemMap() {
  const [expanded, setExpanded] = useState('');
  const accordionData = [
    {
      id: 'ecosystem-map',
      url: 'https://blockchain-ecosystem-map-this-dot-labs-chainlink.vercel.app/',
      title: 'Ecosystem Map',
      subtitle: '01',
      description: 'Explore the ecosystem map to get familiar with the tooling landscape.',
    },
    {
      id: 'roadmap',
      url: 'https://developer-roadmap-1.vercel.app/blockchain',
      title: 'Roadmap',
      subtitle: '02',
      description: 'View the Blockchain developer roadmap to learn how to become a blockchain developer.',
    },
  ];

  const toggleAccordion = (id) => {
    setExpanded(expanded && expanded === id ? null : id);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <ExploreMapBanner
          title="The Smart Contract Ecosystem"
          description="The landscape for smart contract developers consists of multiple related tools and technologies."
          isHomePage={false}
        />
      </div>
      {accordionData.map((data, index) => (
        <EcosystemAccordion
          key={index}
          expanded={expanded === data.id}
          id={data.id}
          description={data.description}
          subtitle={data.subtitle}
          title={data.title}
          expandToggle={toggleAccordion}
        >
          <AccordionContent url={data.url} title={data.title} expanded={expanded === data.id} />
        </EcosystemAccordion>
      ))}
    </section>
  );
}

export default EcosystemMap;
