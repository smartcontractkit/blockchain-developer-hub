import EcosystemAccordion from './EcosystemAccordion';
import AccordionContent from '../AccordionContent';

export default {
  title: 'component/Ecosystem Accordion',
  component: EcosystemAccordion,
};

const Template = (args) => (
  <EcosystemAccordion {...args}>
    <AccordionContent />
  </EcosystemAccordion>
);

export const Default = Template.bind({});
Default.args = {
  id: 'id',
  expanded: false,
};
