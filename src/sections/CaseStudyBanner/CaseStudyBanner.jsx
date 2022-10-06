import React, { useState, useEffect } from 'react';
import styles from './CaseStudyBanner.module.css';
import PropTypes from 'prop-types';
import CaseStudyCard from '@/components/CaseStudyCard';
import { getRandomItemsFromArray } from '@/helpers/getRandomItemsFromArray';
import NavLink from '@/components/NavLink';
import clsx from 'clsx';

export default function CaseStudyBanner({ internal_case_studies }) {
  const [cases, setCases] = useState([]);
  const { items } = internal_case_studies;

  const headingClasses = clsx('h-300', styles.heading);
  const descriptionClasses = clsx('text-lg--short', styles.description);

  useEffect(() => {
    const randomCases = getRandomItemsFromArray(items, 2);
    setCases([...randomCases]);
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h4 className={headingClasses}>Seeking inspiration? </h4>
            <div className={descriptionClasses}>
              Learn why and how other developers have used the web to create amazing web experiences for their users.
            </div>
            <NavLink
              to={'/case-studies'}
              rel="noopener noreferrer"
              type="primary"
              text={'All case studies'}
              iconPosition="right"
              icon="arrow-right-white-rounded.svg"
              className={styles.cases_btn}
            />
          </div>
          <div className={styles.cards}>
            {cases.map(({ title, href, image, tags }, index) => (
              <CaseStudyCard key={index} tags={tags} title={title} href={href} image={image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

CaseStudyBanner.propTypes = {
  internal_case_studies: PropTypes.object,
};
