import Card from './Card';

export default {
  title: 'component/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'XRPL Hackathon: New Year, New NFTs',
  description: 'Build an app for open source collaboration on maps of problems through crowdsourcing and crowdfunding.',
  image: 'https://placekitten.com/200/150',
  date: '2020-01-01',
  online: true,
  prize: '$1,000,000',
  href: 'https://www.google.com',
};

export const Light = Template.bind({});

Light.args = {
  title: 'XRPL Hackathon: New Year, New NFTs',
  description: 'Build an app for open source collaboration on maps of problems through crowdsourcing and crowdfunding.',
  image: 'https://placekitten.com/200/150',
  date: '2020-01-01',
  online: true,
  href: 'https://www.google.com',
  variant: 'light',
};
