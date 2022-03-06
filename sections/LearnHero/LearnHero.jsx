import Svg from '@/components/Svg';
import styles from './LearnHero.module.css';

const BLOCKCHAINS = [
  {
    name: 'EVM Chains',
    image: '/logos/ethereum.svg',
    href: '#evm-chains',
  },
  {
    name: 'Solana',
    image: '/logos/solana.svg',
    href: '#solana',
  },
  {
    name: 'Terra',
    image: '/logos/terra.svg',
    href: '#terra',
  },
];

function LearnHero() {
  return (
    <div className={styles.container}>
      <h1>Learn how to code smart contracts.</h1>

      <p className={styles.description}>
        Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined
        terms and conditions are met
      </p>

      <div className={styles.divider}>Select a blockchain to get started</div>
      <div className={styles.blockchainsContainer}>
        {BLOCKCHAINS.map(({ name, image, href }, index) => (
          <div key={index}>
            <Svg src={image} alt={name} />
            <a href={href}></a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearnHero;
