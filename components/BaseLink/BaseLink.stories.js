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
  },
};

const Template = (args) => (
    <BaseLink {...args}> 
      <span>Next: Smart Contracts</span>
      {/* <object
      className='icon-right'
        type='image/svg+xml'
        height="20"
        width="20"
        data='/icons/arrow-right.svg'
      /> */}
    </BaseLink>
);

export const Default = Template.bind({});
Default.args = {
  exact: true,
  href:'/',
  type: 'primary',
}