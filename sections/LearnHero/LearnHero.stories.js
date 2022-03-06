import LearnHero from './LearnHero';

export default {
  title: 'section/LearnHero',
  component: LearnHero,
};

const Template = (args) => <LearnHero {...args} />;

export const Default = Template.bind({});
