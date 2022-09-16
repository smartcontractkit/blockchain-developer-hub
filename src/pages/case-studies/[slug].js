import styles from '@/styles/MDX.module.css';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import PropTypes from 'prop-types';
import getPage from '@/helpers/getPage';
import getPaths from '@/helpers/getPaths';
import getPagesInfo from '@/helpers/getPagesInfo';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

import BlogLayout from '@/layouts/BlogLayout';
import ArticleHeader from '@/components/ArticleHeader';
import BlogCustomComponents from '@/components/BlogCustomComponents';

function CaseStudies({ data, content, pagesInfo }) {
  return (
    <BlogLayout pages={pagesInfo}>
      <ArticleHeader title={data.heading} />
      <div className={styles.container}>
        <MDXRemote components={BlogCustomComponents} {...content} />
      </div>
    </BlogLayout>
  );
}

CaseStudies.propTypes = {
  data: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  pagesInfo: PropTypes.array,
};

export default CaseStudies;

export const getStaticPaths = async () => {
  const paths = getPaths('case-studies').map((slug) => ({
    params: {
      slug: slug,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const page = await getPage(`case-studies/${params.slug}.md`);
  const mdxSource = await serialize(page.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  });
  const pagesInfo = await getPagesInfo('case-studies');
  return {
    props: {
      data: page.data,
      content: mdxSource,
      pagesInfo,
    },
  };
};
