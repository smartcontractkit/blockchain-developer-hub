import PropTypes from 'prop-types';

function Svg({ href, ...props }) {
  return <object {...props} type="image/svg+xml" data={href} />;
}

Svg.propTypes = {
  href: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  ...PropTypes.any,
};

export default Svg;
