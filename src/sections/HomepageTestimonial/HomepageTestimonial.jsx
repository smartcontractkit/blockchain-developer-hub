import Testimonial from '@/components/Testimonial';
import styles from './HomepageTestimonial.module.css';
import data from '@/data/home.yaml';

function HomepageTestimonial() {
  const testimonial = data.testimonial;

  console.log('testimonial', testimonial);

  return (
    <div className={styles.container}>
      <Testimonial
        title={testimonial.title}
        content={testimonial.content}
        source={testimonial.source}
        icon={testimonial.icon}
      />
    </div>
  );
}

export default HomepageTestimonial;
