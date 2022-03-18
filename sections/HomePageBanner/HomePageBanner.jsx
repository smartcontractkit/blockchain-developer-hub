import NavLink from '@/components/NavLink';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './HomePageBanner.module.css';
import clsx from 'clsx';
import Svg from '@/components/Svg';

function HomePageBanner({ titleA, titleB, link, linkText, image, imageAlt }) {
  const titleClasses = clsx('h-500', styles.title);

  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.banner_left}>
          <div>
            <h1 className={titleClasses}>
              <p className={styles.title_a}>
                <span className={styles.arrow}>{'-->'}</span>
                <span>{titleA}</span>
              </p>
              <p>{titleB}</p>
            </h1>

            <ul className={styles.list}>
              <li className={clsx('body-short-01', styles.list_item)}>
                <Svg className={styles.list_icon} height="24" width="24" href="/icons/school.svg" />
                <smal>
                  <strong>Learn the essentials</strong> of smart contract and blockchain development.
                </smal>
              </li>
              <li className={clsx('body-short-01', styles.list_item)}>
                <Svg className={styles.list_icon} height="24" width="24" href="/icons/memory.svg" />
                <smal>
                  Get familiar with the <strong>development stack</strong> for major blockchain projects.
                </smal>
              </li>
              <li className={clsx('body-short-01', styles.list_item)}>
                <Svg className={styles.list_icon} height="24" width="24" href="/icons/map.svg" />
                <smal>
                  Identify your <strong>ideal journey</strong> to become a blockchain developer.
                </smal>
              </li>
            </ul>

            <NavLink to={link} type="primary" text={linkText} icon="map-pointer.svg" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            {image && <Image src={image} alt={imageAlt} layout="fill" objectFit="contain" />}
          </div>
        </div>
      </div>
    </section>
  );
}

HomePageBanner.propTypes = {
  titleA: PropTypes.string,
  titleB: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default HomePageBanner;
