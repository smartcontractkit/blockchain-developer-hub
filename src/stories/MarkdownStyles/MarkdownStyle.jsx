import mdxStyles from '@/styles/MDX.module.css';

// import myFile from"@/data/pages/markdownstyles.md";

export default function MarkdownStyle() {
  return <div className={mdxStyles.container}>{/* <MDXRemote {...myFile} /> */}</div>;
}
