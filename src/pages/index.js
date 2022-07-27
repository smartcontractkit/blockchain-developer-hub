import CaseStudyBanner from '@/sections/CaseStudyBanner';
import HomeExplore from '@/sections/HomeExplore';
import HomePageBanner from '@/sections/HomePageBanner';
import HomepageBlockchain from '@/sections/HomePageBlockchain';
import HomePageImproveSkillsStories from '@/sections/HomePageImproveSkills';

export default function Home() {
  return (
    <div>
      <HomePageBanner />
      <HomepageBlockchain />
      <HomeExplore />
      <CaseStudyBanner />
      <HomePageImproveSkillsStories />
    </div>
  );
}
