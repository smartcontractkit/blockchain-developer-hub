import EcosystemBanner from '@/sections/EcosystemBanner';
import HomeExplore from '@/sections/HomeExplore';
import HomePageBanner from '@/sections/HomePageBanner';
import HomepageBlockchain from '@/sections/HomePageBlockchain';
import HomePageImproveSkillsStories from '@/sections/HomePageImproveSkills';

import styles from '@/styles/pages/HomePage.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HomePageBanner />
      <HomepageBlockchain />
      <HomeExplore />
      <EcosystemBanner />
      <HomePageImproveSkillsStories />
    </div>
  );
}
