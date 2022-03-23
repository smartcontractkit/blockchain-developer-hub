import Image from 'next/image';
import clsx from 'clsx';
import NavLink from '@/components/NavLink';
import styles from './CaseStudyBanner.module.css';

export default function CaseStudyBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.image}>
          <Image src={'/demo/casestudy.png'} alt={'Case study Banner image'} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.info}>
          <span className={clsx('caption', styles.subtitle)}>Gaming</span>
          <h3 className={clsx('h-300', styles.title)}>Check how Horizon Games utilizing power of blockchain</h3>
          <p className={clsx('body-long-01', styles.overview)}>
            Horizon Games partnered with Infura to battle-test SkyWeaver’s gaming system in order to ensure robust
            functionality and facilitate widespread adoption.
          </p>
          <div className={styles.actions}>
            <NavLink to={'#'} target="_blank" rel="noopener noreferrer" type="primary" text={'Learn more'} />
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
