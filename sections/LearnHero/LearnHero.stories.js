import LearnHero from './LearnHero';

export default {
  title: 'section/Learn Hero',
  component: LearnHero,
};

const Template = (args) => <LearnHero {...args} />;

export const Default = Template.bind({});
