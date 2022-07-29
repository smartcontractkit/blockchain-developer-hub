import styles from './LearnHero.module.css';
import clsx from 'clsx';
import data from '@/data/learn.yaml';
import CardWithLogo from '@/components/CardWithLogo';

function LearnHero() {
  const titleClasses = clsx('h-300', styles.title);
  const descriptionClasses = clsx('text-lg--long', styles.description);
  const dividerClasses = clsx('overline--extra-bold', styles.divider);
  const blockchains = data.resources.map(({ id, name, logo }) => ({ id, name, logo }));

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={titleClasses}>
            <span>Learn</span> how to code <span>smart contracts.</span>
          </h1>

          <p className={descriptionClasses}>
            Smart contracts are digital contracts stored on a blockchain that are automatically executed when
            predetermined conditions are met
          </p>
        </div>

        <div className={dividerClasses}>Learn tracks</div>
        <div className={styles.blockchainsContainer}>
          {blockchains.map(({ id, name, logo }) => (
            <CardWithLogo key={id} href={`#${id}`} height={120} link_text={name} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnHero;
