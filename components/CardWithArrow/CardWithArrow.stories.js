import CardWithArrow from './CardWithArrow';

export default {
  title: 'component/Card with arrow',
  component: CardWithArrow,
};

const Template = (args) => <CardWithArrow {...args} />;

export const WithNumber = Template.bind({});

WithNumber.args = {
  index: 0,
  title: 'Intorduction to Blockchain',
  itemsCount: 2,
  showIndex: true,
  description: '',
};

export const WithoutNumber = Template.bind({});

WithoutNumber.args = {
  index: 0,
  title: 'Intorduction to Blockchain',
  itemsCount: 2,
  showIndex: false,
  description:
    'Competing offers opportunities to learn blockchain development online and gives you the potential to win amazing prizes through both in-person and online virtual hackathons.',
};
