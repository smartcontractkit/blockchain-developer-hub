import clsx from 'clsx';
import QuoteCard from '@/components/QuoteCard';
import styles from './HomepageChainlink101.module.css';
import Svg from '@/components/Svg';

function HomepageChainlink101() {
  const quoteClasses = clsx('body-short-01--bold', styles.quote);
  const cardItems = [
    {
      title: 'Intorduction to Blockchain',
    },
    {
      title: 'Intorduction to Smart Contracts',
    },
  ];

  return (
    <div className={styles.container}>
      <QuoteCard cards={cardItems} card_showIndex={true} textDirection="left">
        <div className={styles.quote_wrapper}>
          <span>
            <Svg height="24" width="16" href="/icons/quote.svg" />
          </span>
          <p className={quoteClasses}>
            Demand for Smart Contract development skills is projected to grow 122 % over the next 5 years.
          </p>

          <small>Chainlink</small>
        </div>
      </QuoteCard>
    </div>
  );
}

export default HomepageChainlink101;
