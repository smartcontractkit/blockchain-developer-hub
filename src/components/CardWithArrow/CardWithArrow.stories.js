import CardWithArrow from './CardWithArrow';

export default {
  title: 'component/Card with arrow',
  component: CardWithArrow,
};

const Template = (args) => <CardWithArrow {...args} />;

export const WithNumber = Template.bind({});

WithNumber.args = {
  subtitle: '01',
  title: 'Intorduction to Blockchain',
  description: '',
  href: '#',
};

export const WithoutNumber = Template.bind({});

WithoutNumber.args = {
  subtitle: '',
  title: 'Intorduction to Blockchain',
  description:
    'Competing offers opportunities to learn blockchain development online and gives you the potential to win amazing prizes through both in-person and online virtual hackathons.',
  href: '#',
};
