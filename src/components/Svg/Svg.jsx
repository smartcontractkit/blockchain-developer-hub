import PropTypes from 'prop-types';

function Svg({ href, width, height, ...props }) {
  return <object width={width} height={height} type="image/svg+xml" data={href} {...props} />;
}

Svg.propTypes = {
  href: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Svg;
