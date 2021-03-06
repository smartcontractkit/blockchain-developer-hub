import Image from 'next/image';
import styles from './LearnHero.module.css';
import Svg from '@/components/Svg';
import clsx from 'clsx';
import data from '@/data/learn.yaml';

function LearnHero() {
  const titleClasses = clsx('h-500', styles.title);
  const descriptionClasses = clsx('body-long-01', styles.description);
  const dividerClasses = clsx('caption', styles.divider);
  const linkClasses = clsx('btn', styles.link);
  const blockchains = data.resources.map(({ id, name, logo }) => ({ id, name, logo }));

  return (
    <div className={styles.container}>
      <h1 className={titleClasses}>Learn how to create smart contracts.</h1>

      <p className={descriptionClasses}>
        Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined
        conditions are met
      </p>

      <div className={dividerClasses}>Select a blockchain to get started</div>
      <div className={styles.blockchainsContainer}>
        {blockchains.map(({ id, name, logo }) => (
          <a href={`#${id}`} className={styles.blockchainCard} key={id}>
            <Image src={logo} alt={name} width={144} height={144} objectFit="contain" />
            <span className={linkClasses}>
              {name}
              <Svg height="20" width="20" href="/icons/arrow-right-blue.svg" title="arrow right blue icon" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default LearnHero;
