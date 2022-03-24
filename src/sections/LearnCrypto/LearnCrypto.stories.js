import LearnCrypto from './LearnCrypto';
import data from '@/data/learn.yaml';
const { resources } = data;
const { id, name, logo, courses, tutorials } = resources[0];

export default {
  title: 'section/Learn Crypto',
  component: LearnCrypto,
};

const Template = (args) => <LearnCrypto {...args} />;

export const Default = Template.bind({});

Default.args = {
  id,
  name,
  logo,
  logoAlt: `${name} Logo`,
  courses,
  tutorials,
};

Default.parameters = {
  layout: 'fullscreen',
};
