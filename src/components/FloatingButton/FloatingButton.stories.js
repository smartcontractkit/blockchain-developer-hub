import FloatingButton from './FloatingButton';

export default {
  title: 'component/ Floatin Button',
  component: FloatingButton,
  argTypes: {
    title: {
      control: 'select',
      options: ['articles', 'chapters'],
    },
  },
};

const Template = (args) => <FloatingButton {...args} triggerPanel={() => {}} />;

export const Default = Template.bind({});

Default.args = {
  title: 'articles',
};
