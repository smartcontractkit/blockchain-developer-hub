import React from 'react';
import PagePagination from './PagePaginationLink';

export default {
  title: 'component/Page Pagination',
  component: PagePagination,
  argTypes: {
    navDirection: {
      control: 'select',
      options: ['next', 'previous'],
      require: true,
    },
  },
};

const Template = (args) => <PagePagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  link: '/',
  text: 'Blockchain 101',
};
export const Previous = Template.bind({});
Previous.args = {
  link: 'https://thischain.org',
  navDirection: 'previous',
  text: 'Map',
};
