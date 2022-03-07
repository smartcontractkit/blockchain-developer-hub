import Image from 'next/image';
import styles from './LearnHero.module.css';
import Svg from '@/components/Svg';

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
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Learn how to code smart contracts.</h1>

      <p className={styles.description}>
        Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined
        terms and conditions are met
      </p>

      <div className={styles.divider}>Select a blockchain to get started</div>
      <div className={styles.blockchainsContainer}>
        {BLOCKCHAINS.map(({ name, image, href }, index) => (
          <div className={styles.blockchainCard} key={index}>
            <Image src={image} alt={name} width={100} height={100} objectFit="contain" />
            <a href={href} className={styles.link}>
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
