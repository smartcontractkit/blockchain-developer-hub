import CaseStudyCard from './CaseStudyCard';

export default {
  title: 'component/Case Study Card',
  component: CaseStudyCard,
  argTypes: {},
};

const Template = (args) => <CaseStudyCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: 'Music, NFT',
  image: '/posts/internal-case-studies/artists-ip-1.png',
  title: 'Nusic: Powering the evolution  of music to protect musicians',
};
