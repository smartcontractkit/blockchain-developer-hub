import NavBar from './NavBar';

export default {
  title: 'component/Nav Bar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
