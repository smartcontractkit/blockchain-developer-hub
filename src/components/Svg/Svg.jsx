import PropTypes from 'prop-types';

function Svg({ href, width, height, title, ...props }) {
  return <img src={href} width={width} height={height} alt={title} {...props} />;
}

Svg.propTypes = {
  href: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Svg;
