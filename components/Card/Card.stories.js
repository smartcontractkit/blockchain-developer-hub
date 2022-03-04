import Card from './Card';

export default {
  title: 'component/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'none'],
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Hackathon = Template.bind({});

Hackathon.args = {
  title: 'XRPL Hackathon: New Year, New NFTs',
  description: 'Build an app for open source collaboration on maps of problems through crowdsourcing and crowdfunding.',
  image: 'https://placekitten.com/200/150',
  date: 'Feb 3 - Mar 17, 2022',
  online: true,
  prize: '$1,000,000',
  href: 'https://www.google.com',
};

export const Workshop = Template.bind({});

Workshop.args = {
  title: 'XRPL Hackathon: New Year, New NFTs',
  description: 'Build an app for open source collaboration on maps of problems through crowdsourcing and crowdfunding.',
  image: 'https://placekitten.com/200/150',
  date: 'Feb 3 - Mar 17, 2022',
  online: false,
  location: 'New York',
  href: 'https://www.google.com',
};

export const Course = Template.bind({});

Course.args = {
  title: 'XRPL Hackathon: New Year, New NFTs',
  description: 'Build an app for open source collaboration on maps of problems through crowdsourcing and crowdfunding.',
  image: 'https://placekitten.com/200/150',
  subtitle: 'Patrick Collins',
  level: 'Intermediate',
  href: 'https://www.google.com',
};

export const HomeCourse = Template.bind({});

HomeCourse.parameters = {
  backgrounds: { default: 'gray' },
};

HomeCourse.args = {
  title: 'XRPL Hackathon: New Year, New NFTs',
  image: 'https://placekitten.com/200/150',
  subtitle: 'Patrick Collins',
  level: 'Intermediate',
  href: 'https://www.google.com',
  variant: 'light',
};

export const HomeTutorial = Template.bind({});

HomeTutorial.parameters = {
  backgrounds: { default: 'gray' },
};

HomeTutorial.args = {
  title: 'XRPL Hackathon: New Year, New NFTs',
  subtitle: 'Patrick Collins | Feb 12, 2022s',
  variant: 'light',
};
