import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './BuildPageSection.module.css';
import Card from '@/components/Card';
import ShareModal from '@/components/ShareModal';
import { useState } from 'react';
import NoItemPlaceholder from '@/components/NoItemPlaceholder';
import HeadingHash from '@/components/HeadingHash';

function BuildPageSection({ name, overview, items, href }) {
  const headingClasses = clsx('subtitle-bold', styles.headings);
  const overviewClasses = clsx('text-md--long', styles.overview);
  const id = name.replace(' ', '').toLowerCase();
  const [shareItem, setShareItem] = useState(null);

  return (
    <div className={styles.mainContent} id={id}>
      <h1 className={headingClasses}>
        <HeadingHash to={href} />
        {name}
      </h1>
      {overview && <p className={overviewClasses}>{overview}</p>}
      {items.length ? (
        <div className={styles.cards}>
          {items.map(
            ({ title, prize, image, description, location, online, on_demand, start_date, end_date, href }, index) => (
              <Card
                title={title}
                prize={prize}
                description={description}
                location={location}
                online={online}
                on_demand={on_demand}
                start_date={start_date}
                end_date={end_date}
                href={href}
                image={image}
                key={index}
                onShare={() => setShareItem(href)}
              />
            )
          )}
        </div>
      ) : (
        <NoItemPlaceholder />
      )}
      {shareItem && <ShareModal url={shareItem} onClose={() => setShareItem(null)} />}
    </div>
  );
}

BuildPageSection.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  items: PropTypes.array,
  href: PropTypes.string.isRequired,
};

BuildPageSection.DefaultProp = {
  items: [],
};
export default BuildPageSection;
