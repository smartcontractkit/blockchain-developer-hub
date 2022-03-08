import PropTypes from 'prop-types';

function Page({ slug }) {
  console.log(slug);
  return <div>Page Slug</div>;
}

Page.propTypes = {
  slug: PropTypes.array,
};

export default Page;

export function getStaticPaths() {
  return {
    // This is an example but we should make this dynamic
    paths: [
      { params: { slug: ['blockchain-101', 'blockchain'] } },
      { params: { slug: ['blockchain-101', 'smart-contracts'] } },
      { params: { slug: ['blockchain-101', 'stack'] } },
      { params: { slug: ['ship'] } },
    ],
    fallback: false,
  };
}

export function getStaticProps(context) {
  const slug = context.params.slug;
  return {
    props: {
      slug,
    },
  };
}
