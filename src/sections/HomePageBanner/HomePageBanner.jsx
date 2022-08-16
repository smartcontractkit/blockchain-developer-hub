import NavLink from '@/components/NavLink';
import styles from './HomePageBanner.module.css';
import clsx from 'clsx';

function HomePageBanner() {
  const headingClasses = clsx('h-600', styles.heading);
  const descriptionClasses = clsx('text-lg--long', styles.description);

  return (
    <section className={styles.container}>
      <div className={styles.contents}>
        <h1 className={headingClasses}>
          <span>Jump into</span> smart contract <span>development</span>
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
          icon="magic-star.svg"
          className="btn--extra-bold"
        />
      </div>
    </section>
  );
}

export default HomePageBanner;
