import React from 'react';
import NavLink from '.';

export default {
  title: 'component/Nav Link',
  component: NavLink,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'seconday', 'outline', 'link'],
      require: true,
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    active: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/',
  active: false,
  type: 'link',
  text: 'Blockchain 101',
};
export const Primary = Template.bind({});
Primary.args = {
  to: 'https://thischain.org',
  type: 'primary',
  icon: 'map-pointer.svg',
  iconPosition: 'right',
  text: 'Explore Map',
};
export const Secondary = Template.bind({});
Secondary.args = {
  to: 'https://thischain.org',
  type: 'secondary',
  icon: 'union.svg',
  iconPosition: 'left',
  text: 'All case studies',
};
export const Outlined = Template.bind({});
Outlined.args = {
  to: 'https://thischain.org',
  type: 'outline',
  icon: 'arrow-right.svg',
  iconPosition: 'right',
  text: 'Next: Smart Contracts',
};
