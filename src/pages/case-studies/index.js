import PagePagination from '@/components/PagePagination';
import data from '@/data/case-studies.yaml';
import getInternalCaseStudies from '@/helpers/getInternalCaseStudies';
import removePastEvent from '@/helpers/removePastEvent';
import BuildPageSection from '@/sections/BuildPageSection';
import styles from '@/styles/pages/BuildPage.module.css';
import PropTypes from 'prop-types';

function CaseStudies({ internal_case_studies }) {
  const { categories } = data;
  const case_studies = [internal_case_studies, ...categories];
  return (
    <div className={styles.container}>
      {case_studies.map(({ name, overview, items, href }, index) => (
        <BuildPageSection key={index} name={name} overview={overview} href={href} items={removePastEvent(items)} />
      ))}
      <PagePagination hasPadding={false} text="Ship" link="/ship" />
    </div>
  );
}

CaseStudies.propTypes = {
  internal_case_studies: PropTypes.object,
};
export default CaseStudies;

export const getStaticProps = async () => {
  const internal_case_studies = await getInternalCaseStudies();
  return {
    props: {
      internal_case_studies,
    },
  };
};
