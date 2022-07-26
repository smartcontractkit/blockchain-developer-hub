import Quotecard from './QuoteCard';

export default {
  title: 'component/Quote Card',
  component: Quotecard,
  layout: 'fullscreen',
};

const Template = (args) => (
  <Quotecard {...args}>
    <p>Demand for Smart Contract development skills is projected to grow 122 % over the next 5 years.</p>
  </Quotecard>
);

export const Default = Template.bind({});

Default.args = {
  cards: [
    {
      title: 'Intorduction to Blockchain',
      href: '#',
    },
    {
      title: 'Intorduction to Smart Contracts',
      href: '#',
    },
  ],
};
