import clsx from 'clsx';
import styles from './EcosystemBanner.module.css';
import ExploreMapBanner from '@/components/ExploreMapBanner';

export default function CaseStudyBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.image}>
          <img src="/images/ecosystem-map.png" alt="Case study Banner image" />
        </div>

        <div className={styles.info}>
          <span className={clsx('overline--extra-bold', styles.subtitle)}>smart contracts ecosystem</span>
          <ExploreMapBanner
            description="All of the tools and products smart contract developers may need to rely on gathered in one place."
            isHomePage={true}
          >
            <h3 className={clsx('h-200', styles.title)}>A growing landscape of tools and technologies</h3>
          </ExploreMapBanner>
        </div>
      </div>
    </div>
  );
}
