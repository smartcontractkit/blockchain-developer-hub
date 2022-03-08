import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import getPage from '@/helpers/getPage';
import PropTypes from 'prop-types';

function Ship({ content }) {
  return (
    <div>
      <h1>Ship page with just MD</h1>

      <MDXRemote {...content} />
    </div>
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
