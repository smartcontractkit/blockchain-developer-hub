import LearnCrypto from './LearnCrypto';
import dummy from '@/data/learn.yaml';
console.log(dummy);
// import dummy from '@/data/dummy.json';
// console.log(dummy);

export default {
  title: 'section/Learn Crypto',
  component: LearnCrypto,
};

const Template = (args) => <LearnCrypto {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'evm-chains',
  name: 'EVM Chains',
  logo: '/logos/ethereum.png',
  logoAlt: 'EVM Chains Logo',
  courses: {},
  tutorials: {},
};

Default.parameters = {
  backgrounds: {
    default: 'gray',
  },
  layout: 'fullscreen',
};
