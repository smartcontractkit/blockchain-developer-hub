import Testimnoial from './Testimonial';

export default {
  title: 'component/Testimnoial',
  component: Testimnoial,
  argTypes: {
    variant: {
      control: 'select',
    },
  },
};

const Template = (args) => <Testimnoial {...args} />;

export const TestimonialSample = Template.bind({});

TestimonialSample.args = {
  title: 'Did you know that...',
  content:
    'Blockchain development skills are rated as the fastest-growing in-demand skills, with an increase of 60x in 2020.',
  source: 'blockchainjobs.com',
  icon: '/icons/chart.svg',
};
