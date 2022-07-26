import PropTypes from 'prop-types';
import Svg from '@/components/Svg';

function Testimonial({ title, content, source, icon }) {
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
      <div>
        source: <span>{source}</span>
      </div>
      <div>
        <Svg height="18" width="18" href={icon} title="testimonial icon" />
      </div>
    </>
  );
}

Testimonial.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Testimonial;
