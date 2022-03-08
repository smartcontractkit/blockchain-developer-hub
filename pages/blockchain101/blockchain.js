import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import getPage from '@/helpers/getPage';
import PropTypes from 'prop-types';

function Blockchain({ content }) {
  return (
    <div>
      <h1>Blockchain 101 - Blockchain</h1>

      <MDXRemote {...content} />
    </div>
  );
}

Blockchain.propTypes = {
  content: PropTypes.object.isRequired,
};
export default Blockchain;

export const getStaticProps = async () => {
  const page = await getPage('blockchain101/blockchain.mdx');
  const mdxSource = await serialize(page.content);
  return {
    props: {
      data: page.data,
      content: mdxSource,
    },
  };
};
