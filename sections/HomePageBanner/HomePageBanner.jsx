import NavLink from '@/components/NavLink';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './HomePageBanner.module.css';
import clsx from 'clsx';

function Homepagebanner({ label, title, overview, link, linkText, image, imageAlt }) {
  const labelClasses = clsx('overline', styles.label);
  const titleClasses = clsx('h-500', styles.title);
  const overviewClasses = clsx('body-long-01', styles.overview);

  return (
    <section className={styles.container}>
      <div className={styles.banner_left}>
        <small className={labelClasses}>{label}</small>
        <h1 className={titleClasses}>{title}</h1>
        <p className={overviewClasses}>{overview}</p>
        <NavLink to={link} type="primary" text={linkText} icon="map-pointer.svg" />
      </div>
      <div className={styles.imageContainer}>
        <Image src={image} alt={imageAlt} layout="fill" objectFit="cover" />
      </div>
    </section>
  );
}

Homepagebanner.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default Homepagebanner;
