import clsx from 'clsx';
import QuoteCard from '@/components/QuoteCard';
import styles from './HomepageChainlink101.module.css';
import Svg from '@/components/Svg';
import data from '@/data/homechainlink.yaml';

function HomepageChainlink101() {
  const quoteClasses = clsx('body-short-01--bold', styles.quote);
  const labelClasses = clsx('body-long-01', styles.label);

  const cardItems = data.items;

  return (
    <div className={styles.container}>
      <QuoteCard cards={cardItems} textDirection="right">
        <div className={styles.quote_wrapper}>
          <Svg height="30" width="20" href="/icons/quote.svg" />
          <p className={quoteClasses}>
            Blockchain skills are rated in the first place in fastest-growing skills of 2020 with an increase of 6000%
          </p>
          <small className={labelClasses}>blockchainjobs.com</small>
        </div>
      </QuoteCard>
    </div>
  );
}

export default HomepageChainlink101;
