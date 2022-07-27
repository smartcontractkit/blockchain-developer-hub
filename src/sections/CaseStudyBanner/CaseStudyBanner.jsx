import clsx from 'clsx';
import NavLink from '@/components/NavLink';
import styles from './CaseStudyBanner.module.css';

export default function CaseStudyBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.image}>
          <img src="/images/ecosystem-map.png" alt="Case study Banner image" />
        </div>

        <div className={styles.info}>
          <span className={clsx('overline--extra-bold', styles.subtitle)}>smart contracts ecosystem</span>
          <h3 className={clsx('h-200', styles.title)}>A growing landscape of tools and technologies</h3>
          <p className={clsx('text-lg--long', styles.overview)}>
            All of the tools and products smart contract developers may need to rely on gathered in one place.
          </p>
          <div className={styles.actions}>
            <NavLink
              to="https://www.figma.com/proto/U6iAHSsDlqoJfOaNwRigeO/Ecosystem-Tools-Map?page-id=0%3A1&node-id=2%3A1241&viewport=264%2C48%2C0.68&scaling=scale-down"
              target="_blank"
              rel="noopener noreferrer"
              type="link"
              icon="grid.svg"
              iconPosition="left"
              text={'Explore Ecosystem'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
