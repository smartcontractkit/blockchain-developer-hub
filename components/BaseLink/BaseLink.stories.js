import React from 'react';
import BaseLink from '.';

export default {
  title: 'component/Base Link',
  component: BaseLink,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'seconday', 'outline', 'link']
    },
    className: {
      control: 'text',
    },
    exact: {
      control: 'boolean'
    }
  },
};

const Template = (args) => (
    <BaseLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  exact: true,
  to:'/',
  type: 'link',
  text: 'Blockchain 101'
}
export const Primary = Template.bind({});
Primary.args = {
  to: 'https://thischain.org',
  type: 'primary',
  icon: 'map-pointer.svg',
  iconPos: 'right',
  text: 'Explore Map'
}
export const Secondary = Template.bind({});
Secondary.args = {
  to:'https://thischain.org',
  type: 'seconday',
  icon: 'union.svg',
  iconPos: 'left',
  text: 'All case studies'
}
export const Outlined = Template.bind({});
Outlined.args = {
  to:'https://thischain.org',
  type: 'outline',
  icon: 'arrow-right.svg',
  iconPos: 'right',
  text: 'Next: Smart Contracts'
}