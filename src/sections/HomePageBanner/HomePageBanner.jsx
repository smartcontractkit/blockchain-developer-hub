import NavLink from '@/components/NavLink';
// import Image from 'next/image';
import styles from './HomePageBanner.module.css';
import clsx from 'clsx';
// import Svg from '@/components/Svg';

function HomePageBanner() {
  const headingClasses = clsx('h-600', styles.heading);
  const descriptionClasses = clsx('text-lg--long', styles.description);

  return (
    <section className={styles.container}>
      <div className={styles.contents}>
        <h1 className={headingClasses}>
          Jump into <span className={styles.smart_text}>smart</span>{' '}
          <span className={styles.contracts_text}>contracts</span> development
        </h1>
        <div className={descriptionClasses}>
          Learn the essentials, become familiar with popular dev stacks, and define your journey to becoming a
          blockchain developer.
        </div>
        <NavLink
          to={'/blockchain101/blockchain'}
          type="link"
          text="Start here"
          iconPosition="right"
          icon="arrow-right-rounded-green.svg"
          className="btn--extra-bold"
        />
      </div>
    </section>
  );
}

export default HomePageBanner;
