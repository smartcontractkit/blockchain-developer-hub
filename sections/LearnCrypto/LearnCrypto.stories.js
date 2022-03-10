import LearnCrypto from './LearnCrypto';
const courses = {
  overview:
    'Competing offers opportunities to learn blockchain development online and gives you the potential to win amazing prizes through both in-person and online virtual hackathons.',
  data: [
    {
      title: 'XRPL Hackathon: New Year, New NFTs',
      author: 'Patrick Collins',
      image: '/images/learn.jpg',
      level: 'Intermediate',
      description:
        'Build an app for open source collaboration on maps of problems through crowdsourcing and crowdfunding.',
    },
    {
      title: 'Complete DApp - Solidity & React - Blockchain Development',
      author: 'Patrick Collins',
      image: '/images/learn.jpg',
      level: 'Intermediate',
      description:
        'Master DApp Development - Smart Contracts - Solidity, Web3, React, Mocha, Ethereum Blockchain Programming for Front-end',
    },
    {
      title: 'Ethereum Blockchain Developer Bootcamp With Solidity (2022)',
      author: 'Patrick Collins',
      image: '/images/learn.jpg',
      level: 'Intermediate',
      description:
        'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    },
  ],
};
const tutorials = {
  overview:
    'Competing offers opportunities to learn blockchain development online and gives you the potential to win amazing prizes through both in-person and online virtual hackathons.',
  data: [
    {
      title: 'XRPL Hackathon: New Year, New NFTs',
      author: 'Patrick Collins',
      data: '022-02-12',
      description:
        'Build an app for open source collaboration on maps of problems through crowdsourcing and crowdfunding.',
    },
    {
      title: 'Complete DApp - Solidity & React - Blockchain Development',
      author: 'Patrick Collins',
      data: '022-02-12',
      description:
        'Master DApp Development - Smart Contracts - Solidity, Web3, React, Mocha, Ethereum Blockchain Programming for Front-end',
    },
    {
      title: 'Ethereum Blockchain Developer Bootcamp With Solidity (2022)',
      author: 'Patrick Collins',
      data: '022-02-12',
      description:
        'Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!',
    },
    {
      title: 'XRPL Hackathon: New Year, New NFTs',
      author: 'Patrick Collins',
      data: '022-02-12',
      description:
        'Build an app for open source collaboration on maps of problems through crowdsourcing and crowdfunding.',
    },
  ],
};

export default {
  title: 'section/Learn Crypto',
  component: LearnCrypto,
};

const Template = (args) => <LearnCrypto {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'evm-chains',
  name: 'EVM Chains',
  logo: '/logos/ethereum.png',
  logoAlt: 'EVM Chains Logo',
  courses: courses,
  tutorials: tutorials,
};

Default.parameters = {
  layout: 'fullscreen',
};
