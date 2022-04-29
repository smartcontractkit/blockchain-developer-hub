import EcosystemAccordion from './EcosystemAccordion';
import AccordionContent from '../AccordionContent';
import { useState } from 'react';

export default {
  title: 'component/Ecosystem Accordion',
  component: EcosystemAccordion,
};

const data = {
  id: 'ecosystem-map',
  url: 'https://blockchain-ecosystem-map-this-dot-labs-chainlink.vercel.app',
  title: 'Ecosystem Map',
  subtitle: '01',
  description: 'Explore the ecosystem map to get familiar with the tooling landscape.',
};

const Template = (args) => {
  const [expanded, setExpanded] = useState('');
  const toggleAccordion = (id) => {
    setExpanded(expanded && expanded === id ? null : id);
  };
  return (
    <EcosystemAccordion {...args} expanded={expanded === data.id} expandToggle={toggleAccordion}>
      <AccordionContent url={data.url} title={data.title} expanded={expanded === data.id} />
    </EcosystemAccordion>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: data.id,
  title: data.title,
  subtitle: data.subtitle,
  description: data.description,
};
