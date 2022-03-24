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
          <span className={clsx('caption', styles.subtitle)}>NFTs</span>
          <h3 className={clsx('h-300', styles.title)}>
            The Currency: Engineering a seamless experience to allocate, mint, and distribute the NFTs
          </h3>
          <p className={clsx('body-long-01', styles.overview)}>
            32,492 Collectors from over 130 countries applied to purchase 67,023 NFTs of &apos;The Currency&apos;,
            Damien Hirst&apos;s first NFT collection.
          </p>
          <div className={styles.actions}>
            <NavLink
              to="https://consensys.net/blog/nft/over-32000-users-from-130-countries-applied-to-purchase-damien-hirsts-nfts-on-the-palm-network/"
              target="_blank"
              rel="noopener noreferrer"
              type="primary"
              text={'Learn more'}
            />
            <NavLink
              to={'/build#casestudies'}
              type="secondary"
              text={'All case studies'}
              iconPosition="left"
              icon="union.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
