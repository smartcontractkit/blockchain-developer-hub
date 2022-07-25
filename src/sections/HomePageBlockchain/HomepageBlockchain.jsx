// import QuoteCard from '@/components/QuoteCard';
import styles from './HomepageBlockchain.module.css';
import data from '@/data/home.yaml';
import CardWithArrow from '@/components/CardWithArrow';
import padNumber from '@/helpers/padNumber';

function HomepageBlockchain() {
  const cardItems = data.hero.featured_articles;

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {cardItems.map((card, index) => (
          <CardWithArrow
            href={card.href}
            title={card.title}
            description={card.description}
            subtitle={padNumber(index, 9)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default HomepageBlockchain;
