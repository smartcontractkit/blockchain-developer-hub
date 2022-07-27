import clsx from 'clsx';
import NavLink from '@/components/NavLink';
import styles from './CaseStudyBanner.module.css';

export default function CaseStudyBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <img
          src="https://cdn.consensys.net/uploads/2021/09/16181652/damien-1.7923f061-958x460.png"
          alt="Case study Banner image"
          className={styles.image}
        />

        <div className={styles.info}>
          <span className={clsx('overline--extra-bold', styles.subtitle)}>smart contracts ecosystem</span>
          <h3 className={clsx('h-200', styles.title)}>A growing landscape of tools and technologies</h3>
          <p className={clsx('body-long-01', styles.overview)}>
            All of the tools and products smart contract developers may need to rely on gathered in one place.
          </p>
          <div className={styles.actions}>
            <NavLink
              to="https://consensys.net/blog/nft/over-32000-users-from-130-countries-applied-to-purchase-damien-hirsts-nfts-on-the-palm-network/"
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
