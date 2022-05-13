import ShareModal from './ShareModal';

export default {
  title: 'component/ Share Modal',
  component: ShareModal,
};

const Template = (args) => <ShareModal {...args} />;

export const Default = Template.bind({});

Default.args = {
  onClose: null,
  url: 'https://www.google.com',
};
