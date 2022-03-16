import PropTypes from 'prop-types';

function Svg({ href, width, height, ...props }) {
  return <object {...props} width={width} height={height} type="image/svg+xml" data={href} />;
}

Svg.propTypes = {
  href: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  ...PropTypes.any,
};

export default Svg;
