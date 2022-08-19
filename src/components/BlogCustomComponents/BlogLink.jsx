import Link from 'next/link';
import PropTypes from 'prop-types';

const CustomLink = ({ href, ...props }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />;
};

CustomLink.propTypes = {
  href: PropTypes.string,
};
export default CustomLink;
