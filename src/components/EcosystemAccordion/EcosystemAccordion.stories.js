import EcosystemAccordion from './EcosystemAccordion';
import AccordionContent from '../AccordionContent';
import { useState } from 'react';
import accordionData from '@/data/ecosystem-accordion.yaml';

export default {
  title: 'component/Ecosystem Accordion',
  component: EcosystemAccordion,
};

const data = accordionData[0];

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
