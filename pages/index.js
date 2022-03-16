import HomeExplore from '@/sections/HomeExplore';
import HomePageBanner from '@/sections/HomePageBanner';
import HomepageChainlink101 from '@/sections/HomePageChainlink101/HomepageChainlink101';
import HomePageImproveSkillsStories from '@/sections/HomePageImproveSkills';
import HomePageLifecycleBanner from '@/sections/HomePageLifecycleBanner';

import styles from '@/styles/pages/HomePage.module.css';

export default function Home() {
  return (
    <div>
      <HomePageBanner
        title="Smart Contracts Development"
        overview="Covering the fundamentals of web3 development: from writing Solidity, to minting NFTs, to building full-stack dApps. Bringing you resources from the best in blockchain."
        label="Everything about"
        link="/"
        linkText="Quickstart"
        image="/demo/unsplash_tMbQpdguDVQ.png"
        imageAlt="Banner image"
      />
      <HomepageChainlink101 />
      <HomeExplore />
      <HomePageLifecycleBanner
        title="Get to know the development cycle"
        overview="The ecosystem tools map outlines the entire smart contract developer ecosystem, and all of the tools and products smart contract developers may need to rely on."
        linkText="Explore Map"
        link="/"
      />
      <div className={styles.sectionholder}></div>
      <HomePageImproveSkillsStories />
    </div>
  );
}
