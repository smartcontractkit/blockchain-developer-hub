---
title: Introduction to blockchain
---

## Shipping your first dApp

By now you are likely to have consumed some of the content from the learn section or maybe even have participated in
your first hackathon. Participating in workshops is great, but taking the first step towards building your first dApp
can be difficult.

Why now? The world is slowly realizing the importance and benefits of permissionless data, that is, data that is not
owned by a few large players, but rather decentralized and transparent. While it’s still early in the blockchain
development world, building applications is the best way we can ensure the community and ecosystem moves forward, and
for you to participate in the great innovation of web3.

### Here are some pointers to keep in mind:

- Play to your strengths: If you are particularly skilled in one area, focus on that. For example, if you are
  backend-focused and don’t have a ton of frontend experience, choose tools that have out-of-box boilerplate templates,
  such as Moralis. This will help you iterate faster and ship sooner. You can brush up on other skills later.

- Build your team: if you are participating in an event, seek out teammates in the event’s forums. Like you, other
  participants will look for complimentary skills to strengthen the effort. If you are building outside of an event,
  create a project roster to attract others. Places like [devpost](https://devpost.com/software) are great for this.

- Use boring solutions. Dan McKinley lay some wise words on us in his
  [Choose Boring Technology](https://mcfunley.com/choose-boring-technology) post. If you come across a problem while
  building your dApp, it’s likely that others before you have come across it and have found a solution that works well.
  To iterate faster, choose those solutions. The Ecosystem Map is a great place to learn about all the products in the
  blockchain space.

## Stack

Before choosing the stack for your project, in addition to your specific strengths & end-goals, you will also want to
consider important factors such as community size, support, and documentation. Generally, you will want to choose the
stack that allows you to iterate and ship faster. You can focus on optimizations later.

For smart-contract coding, you should choose the language you feel most comfortable with. Use this reference to get
started.

<table>
    <thead>
        <tr>
            <th></th>
            <th>EVM Chains</th>
            <th>Solana</th>
            <th>Terra</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>**Language**</td>
            <td>
                [Solidity](https://docs.soliditylang.org/en/v0.8.13/) - (based on javascript)
            </td>
            <td>
                [Rust](https://www.rust-lang.org/)\
                [C](https://www.iso.org/standard/74528.html)\
                [C++](https://isocpp.org/)
            </td>
            <td>
                [Rust](https://www.rust-lang.org/)
            </td>
        </tr>
        <tr>
            <td>**Common frameworks**</td>
            <td>
                [Hardhat](https://hardhat.org/) - (javascript)\
                [Brownie](https://eth-brownie.readthedocs.io/en/stable/index.html) - (python)
            </td>
            <td>
                [Anchor](https://book.anchor-lang.com/)
            </td>
            <td>
                [Terra.js](https://terra-money.github.io/terra.js/) - (javascript)\
                [Terra.py](https://github.com/terra-money/terra.py) - (python)\
                [Cosmos SDK](https://v1.cosmos.network/sdk)
            </td>
        </tr>
        <tr>
            <td>**Storage**</td>
            <td>
                [IPFS](https://ipfs.io/)\
                [AWS](https://aws.amazon.com/s3/)\
                [Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-introduction)\
                [GCP](https://cloud.google.com/storage)
            </td>
            <td>
                [Arweave](https://www.arweave.org/)\
                [AWS](https://aws.amazon.com/s3/)\
                [Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-introduction)\
                [GCP](https://cloud.google.com/storage)
            </td>
            <td>
                [Terra FCD](https://github.com/terra-money/fcd)\
                [AWS](https://aws.amazon.com/s3/)\
                [Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-introduction)\
                [GCP](https://cloud.google.com/storage)
            </td>
        </tr>
        <tr>
            <td>**Popular starter kits**</td>
            <td>[Moralis](https://moralis.io/)</td>
            <td>[dapp-scaffold](https://github.com/solana-labs/dapp-scaffold)</td>
            <td>[Terrain](https://github.com/iboss-ptk/terrain)</td>
        </tr>
        <tr>
            <td>**Common frontends**</td>
            <td>
                [Angular](https://angular.io/)\
                [Chakra UI](https://chakra-ui.com/)\
                [React](https://reactjs.org/)\
                [Vue](https://vuejs.org/)
            </td>
            <td>
                [Angular](https://angular.io/)\
                [Chakra UI](https://chakra-ui.com/)\
                [React](https://reactjs.org/)\
                [Vue](https://vuejs.org/)
            </td>
            <td>
                [Angular](https://angular.io/)\
                [Chakra UI](https://chakra-ui.com/)\
                [React](https://reactjs.org/)\
                [Vue](https://vuejs.org/)
            </td>
        </tr>
    </tbody>
</table>

## Security

Smart contracts (regardless of the specific blockchain they are on) are extremely flexible. They have the ability to
hold large amounts of value (often millions of billions of USD) and execute immutable code. There are countless
advantages from both the transparency and decentralization of the system, however, the high value held by these
contracts also attracts countless attacks. Attackers look to profit both from the vulnerabilities found in smart
contracts as well as the blockchains they run on.

Smart contracts are different from other software programs in that once created, they cannot be changed to patch
security flaws. This is the nature of the immutability of the blockchain. Once attacks occur, value extracted by the
attacker cannot be recovered by its original holders. As of this writing, over $1 billion USD has been extracted by
attackers across blockchains.

Like any software workflow, you must ensure that your smart contracts are tested thoroughly in both development and test
environments (testnets), but in addition, you must be aware about common attack types and what solutions and best
practices can be used to mitigate attacks and deploy secure smart contracts.

In addition to the tools listed in the ecosystem map, it’s important to be familiar with the most common attack types.
These include;

- Re-entrancy
- Source of randomness
- Oracle manipulation

Get familiar with these attacks and read more at the
[Consensys Smart Contract Known Attacks](https://consensys.github.io/smart-contract-best-practices/attacks/) page.

## Auditing

While security starts with the first line of code written by developers, having a 3rd party audit your smart contracts
prior to shipping them to production is always a good idea. While this is not a replacement for development best
practices, it’s become a must before deploying to a mainnet.

Some of the most popular auditing teams include

- [OpenZeppelin](https://openzeppelin.com/security-audits/)
- [Consensys Diligence](https://consensys.net/diligence/)
- [Runtime Verification](https://runtimeverification.com/smartcontract/)
- [Certora](https://www.certora.com/)
- [Halborn](https://halborn.com/)

## Examples and Inspiration

If you’ve made it all the way here, you are likely thinking about what to build. Here are some great projects that
started with a simple idea and built a full-fledged dapp.

- [**Rupya**](https://devfolio.co/submissions/rupya-776b) - Zero collateral lending platform with a focus on seamless
  lending for agriculture. 🧑🏽‍🌾
- [**NUSIC: NFT Music Bonds**](https://devpost.com/software/nusic-nft-music-oracle) - Royalty bearing NFT music bonds,
  powered by a streaming data oracle network.
- [**Crypto Adventure**](https://github.com/otaiga/CryptoAdventure) - Choose Your Own Adventure (CYOA) game platform
  written to take advantage of Web3.
- [**SavePanther**](https://showcase.ethglobal.com/roadtoweb3/savepanther) - Mint exclusive NFT collectibles for raising
  funds to protect endangered panthers.
- [**Meta Capsule**](https://showcase.ethglobal.com/buildquest/meta-capsule-x30ba) - Infrastructure for fashionb rands
  and merchandisers interested in bringing their physical collection to life in the metaverse.
- [**Soleil**](https://devpost.com/software/soleil) - A way to incentivise both growths of the entire solar industry
  with one transaction and of a decentralised off-chain public feed of solar energy production data for all to use

Find even more inspiration over at [Devpost](https://devpost.com/software/built-with/blockchain).
