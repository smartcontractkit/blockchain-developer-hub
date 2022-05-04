import MarkdownStyle from './MarkdownStyle';

export default {
  title: 'Markdown',
  component: MarkdownStyle,
};

const Template = (args) => <MarkdownStyle {...args} />;

export const Default = Template.bind({});
