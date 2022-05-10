import Modal from './Modal';

export default {
  title: 'component/ Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'articles',
};
