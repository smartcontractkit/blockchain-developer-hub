import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import getPage from '@/helpers/getPage';
import PropTypes from 'prop-types';
import BlogLayout from '@/layouts/BlogLayout';
import ArticleHeader from '@/components/ArticleHeader';
import mdxStyles from '@/styles/MDX.module.css';
import getPaths from '@/helpers/getPaths';
import getPagesInfo from '@/helpers/getPagesInfo';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

function Blockchain({ data, content, pagesInfo }) {
  return (
    <BlogLayout pages={pagesInfo}>
      <ArticleHeader
        title={data.title}
        author={data.author}
        role={data.author_role}
        image={data.author_image}
        datetime={data.date}
      />
      <div className={mdxStyles.container}>
        <MDXRemote {...content} />
      </div>
    </BlogLayout>
  );
}

Blockchain.propTypes = {
  data: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  pagesInfo: PropTypes.array,
};
export default Blockchain;

export const getStaticPaths = async () => {
  const paths = getPaths('blockchain101').map((slug) => ({ params: { slug: slug } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const page = await getPage(`blockchain101/${params.slug}.md`);
  const mdxSource = await serialize(page.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  });
  const pagesInfo = await getPagesInfo('blockchain101');
  return {
    props: {
      data: page.data,
      content: mdxSource,
      pagesInfo,
    },
  };
};
