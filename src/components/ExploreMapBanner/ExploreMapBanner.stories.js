import ExploreMapBanner from './ExploreMapBannerWithoutAccordion';

export default {
  title: 'title/Explore Map Banner',
  component: ExploreMapBanner,
};

const Template = (args) => <ExploreMapBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'The Smart Contract Ecosystem Map',
  description:
    'The ecosystem tools map outlines the entire smart contract developer ecosystem, and all of the tools andproducts smart contract developers may need to rely on.',
  isHomePage: true,
};
