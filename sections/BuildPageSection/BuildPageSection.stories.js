import BuildPageSection from './BuildPageSection';
import data from '@/data/build.yaml';
const { categories } = data;
const { name, overview, items } = categories[0];

export default {
  title: 'section/Build Page section',
  component: BuildPageSection,
  layout: 'fullscreen',
};

const Template = (args) => <BuildPageSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  name,
  overview,
  items,
};
