import EcosystemBanner from '@/sections/EcosystemBanner';
import HomeExplore from '@/sections/HomeExplore';
import HomePageBanner from '@/sections/HomePageBanner';
import HomepageBlockchain from '@/sections/HomePageBlockchain';
import HomePageImproveSkillsStories from '@/sections/HomePageImproveSkills';

export default function Home() {
  return (
    <div>
      <HomePageBanner>
        <HomepageBlockchain />
      </HomePageBanner>
      <HomeExplore />
      <EcosystemBanner />
      <HomePageImproveSkillsStories />
    </div>
  );
}
