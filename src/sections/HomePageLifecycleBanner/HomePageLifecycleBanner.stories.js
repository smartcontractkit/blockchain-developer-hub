import HomePageLifecycleBanner from './HomePageLifecycleBanner';

export default {
  title: 'section/HomePage lifecycle Banner',
  component: HomePageLifecycleBanner,
};

const Template = (args) => <HomePageLifecycleBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Get to know the development cycle',
  overview:
    'The ecosystem tools map outlines the entire smart contract developer ecosystem, and all of the tools and products smart contract developers may need to rely on.',
  link: '/',
  linkText: 'Explore Map',
};
Default.parameters = {
  backgrounds: {
    default: 'gray',
  },
  layout: 'fullscreen',
};
