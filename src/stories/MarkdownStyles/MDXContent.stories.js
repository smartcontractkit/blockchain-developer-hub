import styles from '@/styles/MDX.module.css';
import MdxContent from './MarkdownContent.md';

export default {
  title: 'Mdx/ without mdx file style',
};

const Template = () => (
  <div className={styles.container}>
    <MdxContent />
  </div>
);

export const Default = Template.bind({});
