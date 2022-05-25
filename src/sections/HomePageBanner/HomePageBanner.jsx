import NavLink from '@/components/NavLink';
import Image from 'next/image';
import styles from './HomePageBanner.module.css';
import clsx from 'clsx';
import Svg from '@/components/Svg';

function HomePageBanner() {
  const titleClasses = clsx('h-500', styles.title);

  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.banner_left}>
          <div>
            <h1 className={titleClasses}>
              <p className={styles.title_a}>
                <span className={styles.arrow}>{'-->'}</span>
                <span>{'Dive into'}</span>
              </p>
              <p>{'smart contract development'}</p>
            </h1>

            <ul className={styles.list}>
              <li className={clsx('body-short-01', styles.list_item)}>
                <Svg className={styles.list_icon} height="24" width="24" href="/icons/school.svg" />
                <small>
                  <strong>Learn the essentials</strong> of blockchain and smart contract development.
                </small>
              </li>
              <li className={clsx('body-short-01', styles.list_item)}>
                <Svg className={styles.list_icon} height="24" width="24" href="/icons/memory.svg" />
                <small>
                  <strong>Get familiar</strong> with the tools and resources you need to start building your own project.
                </small>
              </li>
              <li className={clsx('body-short-01', styles.list_item)}>
                <Svg className={styles.list_icon} height="24" width="24" href="/icons/map.svg" />
                <small>
                  <strong>Lay the foundations</strong> for your journey to becoming a blockchain developer.
                </small>
              </li>
            </ul>

            <NavLink to={'/blockchain101/blockchain'} type="primary" text="Get Started" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image src={'/demo/banner-right.png'} alt={'Banner image'} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePageBanner;
