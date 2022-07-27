import CardWithLogo from './CardWithLogo';

export default {
  title: 'component/ Card With Logo',
  component: CardWithLogo,
  argTypes: {
    href: {},
    logo: {},
    link_text: {},
    width: {},
    height: {},
    isHomePage: {},
  },
};

const Template = (args) => <CardWithLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  logo: '/logos/ethereum.png',
  link_text: 'EVM (ethereum)',
  height: 120,
  isHomePage: true,
};
