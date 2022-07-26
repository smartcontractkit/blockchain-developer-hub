import Testimonial from '@/components/Testimonial';
import styles from './HomepageTestimonial.module.css';

function HomepageTestimonial() {
  return (
    <div className={styles.container}>
      <Testimonial
        title="Did you know that..."
        content="Blockchain development skills are rated as the fastest-growing in-demand skills, with an increase of 60x in 2020."
        source="source: blockchainjobs.com"
        icon="chart.svg"
      />
    </div>
  );
}

export default HomepageTestimonial;
