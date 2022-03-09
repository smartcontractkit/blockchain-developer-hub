import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import getPage from '@/helpers/getPage';
import PropTypes from 'prop-types';
import BlogLayout from '@/layouts/BlogLayout';
import ArticleHeader from '@/components/ArticleHeader';

function Ship({ content }) {
  return (
    <BlogLayout>
      <ArticleHeader
        title="How to ship your dApp"
        author="James Bond"
        role="Software Engineer at Chainlink"
        image="/logos/solana.png"
        datetime="2020-01-01"
      />

      <MDXRemote {...content} />
    </BlogLayout>
  );
}

Ship.propTypes = {
  content: PropTypes.object.isRequired,
};
export default Ship;

export const getStaticProps = async () => {
  const page = await getPage('ship.md');
  const mdxSource = await serialize(page.content);
  return {
    props: {
      data: page.data,
      content: mdxSource,
    },
  };
};
