import Footer from './Footer';

export default {
  title: 'component/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
