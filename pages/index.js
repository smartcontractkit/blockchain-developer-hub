import HomePageBanner from '@/sections/HomePageBanner';

export default function Home() {
  return (
    <div>
      <HomePageBanner
        title="Smart Contracts Development"
        overview="Covering the fundamentals of web3 development: from writing Solidity, to minting NFTs, to building full-stack dApps. Bringing you resources from the best in blockchain."
        label="Everything about"
        link="/"
        linkText="Quickstart"
        image="https://www.fillmurray.com/640/360"
        imageAlt="Banner image"
      />
    </div>
  );
}
