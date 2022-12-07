import Notification from './Notification';

export default {
  title: 'component/Notification',
  component: Notification,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'fail'],
      },
    },
    message: {},
    isActive: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => <Notification {...args} />;

export const Default = Template.bind({});

Default.args = {
  message: 'This is my message to you',
  type: 'success',
  isActive: true,
};
