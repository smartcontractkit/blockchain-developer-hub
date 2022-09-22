import PagePagination from '@/components/PagePagination';
import external_case_studies from '@/data/case-studies.yaml';
import getInternalCaseStudies from '@/helpers/getInternalCaseStudies';
import removePastEvent from '@/helpers/removePastEvent';
import BuildPageSection from '@/sections/BuildPageSection';
import styles from '@/styles/pages/BuildPage.module.css';
import PropTypes from 'prop-types';

function CaseStudies({ internal_case_studies }) {
  const case_studies = {
    ...internal_case_studies,
  };
  case_studies.items = [...case_studies.items, ...external_case_studies.items];
  const { name, items, overview, href } = case_studies;

  return (
    <div className={styles.container}>
      <BuildPageSection name={name} overview={overview} href={href} items={removePastEvent(items)} />
      <PagePagination hasPadding={false} text="Build" link="/build" />
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
