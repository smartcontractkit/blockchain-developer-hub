// import NavLink from '@/components/NavLink';
// import Image from 'next/image';
import styles from './HomePageBanner.module.css';
// import clsx from 'clsx';
// import Svg from '@/components/Svg';

function HomePageBanner() {
  // const titleClasses = clsx('h-500', styles.title);

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>
        Jump into <span className={styles.smart_text}>smart</span> <br />{' '}
        <span className={styles.contracts_text}>contracts</span> development
      </h1>
    </section>
  );
}

export default HomePageBanner;
