import EcosystemAccordion from './EcosystemAccordion';

export default {
  title: 'component/Ecosystem Accordion',
  component: EcosystemAccordion,
};

const Template = (args) => (
  <EcosystemAccordion {...args}>
    <p>My contents here</p>
  </EcosystemAccordion>
);

export const Default = Template.bind({});
Default.args = {
  id: 'id',
  expanded: false,
};
