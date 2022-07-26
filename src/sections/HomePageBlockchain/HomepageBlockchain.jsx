// import QuoteCard from '@/components/QuoteCard';
import styles from './HomepageBlockchain.module.css';
import data from '@/data/home.yaml';
import CardWithArrow from '@/components/CardWithArrow';

function HomepageBlockchain() {
  const cardItems = data.hero.featured_articles;

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.cards}>
          {cardItems.map((card, index) => (
            <CardWithArrow
              href={card.href}
              title={card.title}
              link_text={card.link_text}
              description={card.description}
              key={index}
            >
              <img src={card.icon} alt={`${card.title} icon`} />
            </CardWithArrow>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomepageBlockchain;
