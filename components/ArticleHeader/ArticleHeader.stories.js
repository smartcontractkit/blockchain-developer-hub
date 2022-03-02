import ArticleHeader from './ArticleHeader';

export default {
  title: 'component/ArticleHeader',
  component: ArticleHeader,
};

const Template = (args) => <ArticleHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  datetime: '2020-01-01',
  title: 'Blockchain 101',
  author: 'James Bond',
  role: 'Software Engineer at Chainlink',
  image: 'https://randomuser.me/api/portraits/men/76.jpg',
};
