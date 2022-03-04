import TutorialCard from './TutorialCard';

export default {
  title: 'component/Tutorial Card',
  component: TutorialCard,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'gray'],
    },
  },
};

const Template = (args) => <TutorialCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'XRPL Hackathon: New Year, New NFTs',
  author: 'Patrick Collins ',
  date: 'Feb 12, 2022',
  variant: 'default',
  description: '',
};
