import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import getPage from '@/helpers/getPage';
import PropTypes from 'prop-types';
import BlogLayout from '@/layouts/BlogLayout';
import ArticleHeader from '@/components/ArticleHeader';

function Ship({ data, content }) {
  return (
    <BlogLayout>
      <ArticleHeader
        title={data.title}
        author={data.author}
        role={data.role}
        image={data.author_image}
        datetime={data.datetime}
      />

      <MDXRemote {...content} />
    </BlogLayout>
  );
}

Ship.propTypes = {
  data: PropTypes.object.isRequired,
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
