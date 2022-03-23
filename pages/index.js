import CaseStudyBanner from '@/sections/CaseStudyBanner';
import HomeExplore from '@/sections/HomeExplore';
import HomePageBanner from '@/sections/HomePageBanner';
import HomepageChainlink101 from '@/sections/HomePageChainlink101';
import HomePageImproveSkillsStories from '@/sections/HomePageImproveSkills';
import HomePageLifecycleBanner from '@/sections/HomePageLifecycleBanner';

export default function Home() {
  return (
    <div>
      <HomePageBanner />
      <HomepageChainlink101 />
      <HomeExplore />
      <HomePageLifecycleBanner
        title="Get to know the development cycle"
        overview="The ecosystem tools map outlines the entire smart contract developer ecosystem, and all of the tools and products smart contract developers may need to rely on."
        linkText="Explore Map"
        link="https://smartcontractecosystem.com/"
      />
      <CaseStudyBanner />
      <HomePageImproveSkillsStories />
    </div>
  );
}
