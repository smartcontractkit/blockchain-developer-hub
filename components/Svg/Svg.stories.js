import Svg from './Svg';

export default {
  title: 'component/Svg',
  component: Svg,
};

const Template = (args) => <Svg {...args} />;

export const Default = Template.bind({});

Default.args = {
  href: '/icons/arrow-right.svg',
  width: '100',
  height: '100',
};
