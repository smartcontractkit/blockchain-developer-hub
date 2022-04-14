import clsx from 'clsx';
import QuoteCard from '@/components/QuoteCard';
import styles from './HomepageBlockchain.module.css';
import Svg from '@/components/Svg';
import data from '@/data/home.yaml';

function HomepageBlockchain() {
  const quoteClasses = clsx('body-short-01--bold', styles.quote);
  const labelClasses = clsx('body-long-01', styles.label);

  const cardItems = data.hero.featured_articles;

  return (
    <div className={styles.container}>
      <QuoteCard cards={cardItems} textDirection="right">
        <div className={styles.quote_wrapper}>
          <Svg height="30" width="20" href="/icons/quote.svg" />
          <p className={quoteClasses}>
            Blockchain development skills are rated as the fastest-growing in-demand skills of 2020, with an increase of 6000%
          </p>
          <small className={labelClasses}>blockchainjobs.com</small>
        </div>
      </QuoteCard>
    </div>
  );
}

export default HomepageBlockchain;
