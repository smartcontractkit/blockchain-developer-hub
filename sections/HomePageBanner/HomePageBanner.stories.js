import Homepagebanner from './HomePageBanner';

export default {
  title: 'section/HomePage Banner',
  component: Homepagebanner,
};

const Template = (args) => <Homepagebanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Smart Contracts Development',
  overview:
    'Covering the fundamentals of web3 development: from writing Solidity, to minting NFTs, to building full-stack dApps. Bringing you resources from the best in blockchain.',
  label: 'Everything about',
  link: '/',
  linkText: 'Quickstart',
  image: 'https://www.fillmurray.com/640/360',
  imageAlt: 'Banner image',
};
