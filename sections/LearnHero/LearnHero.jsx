import Image from 'next/image';
import styles from './LearnHero.module.css';
import Svg from '@/components/Svg';
import clsx from 'clsx';

const BLOCKCHAINS = [
  {
    name: 'EVM Chains',
    image: '/logos/ethereum.png',
    href: '#evm-chains',
  },
  {
    name: 'Solana',
    image: '/logos/solana.png',
    href: '#solana',
  },
  {
    name: 'Terra',
    image: '/logos/terra.png',
    href: '#terra',
  },
];

function LearnHero() {
  const titleClasses = clsx('h-500', styles.title);
  const descriptionClasses = clsx('body-long-01', styles.description);
  const dividerClasses = clsx('caption', styles.divider);
  const linkClasses = clsx('btn', styles.link);

  return (
    <div className={styles.container}>
      <h1 className={titleClasses}>Learn how to code smart contracts.</h1>

      <p className={descriptionClasses}>
        Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined
        terms and conditions are met
      </p>

      <div className={dividerClasses}>Select a blockchain to get started</div>
      <div className={styles.blockchainsContainer}>
        {BLOCKCHAINS.map(({ name, image, href }, index) => (
          <div className={styles.blockchainCard} key={index}>
            <Image src={image} alt={name} width={100} height={100} objectFit="contain" />
            <a href={href} className={linkClasses}>
              {name}
              <Svg height="20" width="20" href="/icons/arrow-right-blue.svg" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearnHero;
