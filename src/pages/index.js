import getInternalCaseStudies from '@/helpers/getInternalCaseStudies';
import CaseStudyBanner from '@/sections/CaseStudyBanner';
import EcosystemBanner from '@/sections/EcosystemBanner';
import HomeExplore from '@/sections/HomeExplore';
import HomePageBanner from '@/sections/HomePageBanner';
import HomepageBlockchain from '@/sections/HomePageBlockchain';
import HomePageImproveSkillsStories from '@/sections/HomePageImproveSkills';
import PropTypes from 'prop-types';

import styles from '@/styles/pages/HomePage.module.css';

export default function Home({ internal_case_studies }) {
  return (
    <div className={styles.container}>
      <HomePageBanner />
      <HomepageBlockchain />
      <HomeExplore />
      <EcosystemBanner />
      <HomePageImproveSkillsStories />
      <CaseStudyBanner internal_case_studies={internal_case_studies} />
    </div>
  );
}

Home.propTypes = {
  internal_case_studies: PropTypes.object,
};

export const getStaticProps = async () => {
  const internal_case_studies = await getInternalCaseStudies();
  return {
    props: {
      internal_case_studies,
    },
  };
};
