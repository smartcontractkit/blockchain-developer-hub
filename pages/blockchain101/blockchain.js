import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import getPage from '@/helpers/getPage';
import PropTypes from 'prop-types';
import BlogLayout from '@/layouts/BlogLayout';
import ArticleHeader from '@/components/ArticleHeader';
import mdxStyles from '@/styles/MDX.module.css';

function Blockchain({ data, content }) {
  return (
    <BlogLayout>
      <ArticleHeader
        title={data.title}
        author={data.author}
        role={data.author_role}
        image={data.author_image}
        datetime={data.datetime}
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
};
export default Blockchain;

export const getStaticProps = async () => {
  const page = await getPage('blockchain101/blockchain.md');
  const mdxSource = await serialize(page.content);
  return {
    props: {
      data: page.data,
      content: mdxSource,
    },
  };
};
