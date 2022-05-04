import mdxContent from './anynewfile.json';
import styles from '@/styles/MDX.module.css';
import { MDXRemote } from 'next-mdx-remote';

export default {
  title: 'Markdown/Test',
};

const Template = () => (
  <div className={styles.container}>
    <MDXRemote {...mdxContent} />
  </div>
);

export const Default = Template.bind({});
