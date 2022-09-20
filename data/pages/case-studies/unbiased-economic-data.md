---
title: Unbiased Economic Data
heading: Unbiased Economic Data for Smart Contract Developers
description:
  Rust had heard of the emergent project, which by then, had only recently transitioned from its proof-of-concept stage.
  But after realizing that he could pay his developer’s salary instantly without fees, and with complete finality, he
  was hooked
href: case-studies/unbiased-economic-data
image: 'https://cdn.consensys.net/uploads/2021/09/16181652/damien-1.7923f061-958x460.png'

sidebar_title: Case Studies
sidebar_position: 2
author: Stefan Rust
---

Stefan Rust’s journey into the world of blockchain began in 2012 with a simple, albeit unconventional request for the
time. While running EXICON, a world-class developer agency, one of his engineers asked if it was possible to be paid in
Bitcoin.

Rust had heard of the emergent project, which by then, had only recently transitioned from its proof-of-concept stage.
But after realizing that he could pay his developer’s salary instantly without fees, and with complete finality, he was
hooked. Even in its relative infancy, the digital currency and corresponding network provided significant improvement to
TradFi payment and settlement systems available at the time in Rust’s opinion.

But his passion for DeFi quickly grew from an interest in a utility to support his developer agency to a new direction
for his career. Fewer than five years after discovering Bitcoin, he joined Bitcoin.com as the Global Head of Corporate &
Business Development before assuming the CEO role in June 2019.

During his tenure, Rust facilitated a massive transformation for the company, overseeing the launch of its exchange with
over thirty BCH pairings and support for SLP, growing adoption from 2 million to 11 million wallets, and securing a Visa
BIN, allowing users to spend their cryptocurrency wherever Visa is accepted.

But now, Stefan Rust has turned his attention to revolutionizing economic data visualization and combating the impact of
global market inflation with his latest project: Truflation.

<mark>
Initially, Rust and his team were interested in building economic data into an inflation-protected stablecoin (or “flatcoin”). However, while working on and researching this project, the team saw an announcement from [Balaji Srinivasan](https://twitter.com/balajis), advertising [a competition to build a decentralized inflation dashboard](https://thenetworkstate.com/inflation) in August 2021. And realizing the intersection between their work and this type of platform, they realized the potential they had to expand their project, and seized the opportunity.
</mark>

Truflation is a standalone platform providing developers with indexes of unbiased economic data that is updated on-chain
daily. Using open source algorithms, Truflation tracks prices across 18 million items from 40 different sources. This
enables users to make better decisions by helping them visualize the state and performance of the global market with
transparent and censorship-resistant information.

Rust’s vision was to address the pitfalls of applying TradFi metrics to a growingly tokenized market. This has never
been more important than now as inflationary pressures driven by world events, including COVID-19, increased money
supply, and crumbling supply systems, have pushed the global economy to an inevitable tipping point.

## Truflation Platform Architecture

Truflation’s platform architecture has evolved over time to meet the team’s needs at different stages of development.
Initially, the team built out the platform’s backend using TypeScript because of its speed and ease of use, allowing
them to quickly prototype.

However, as the project grows, the Truflation team is placing a greater emphasis on Python 3 while phasing out
TypeScript. Python is the common language of the data science and high speed data communities, and Rust hopes that
migrating to the language will encourage economists and data scientists to contribute to Truflation’s algorithms.
Additionally, this migration will result in fewer distributed libraries, reducing the time it takes for Truflation
engineers to audit the platform.

The JavaScript framework Vue powers the platform’s frontend, and was also used in part to decrease development times,
with Rust citing that the framework is much lighter than competing technologies such as React.

The platform’s smart contracts are written with Solidity >0.8.6, and Hardhat, a JavaScript framework, is used to deploy
those contracts. Leveraging these tools in concert provides a seamless developer experience due to the syntactic
similarities between Solidity and JavaScript, and reduces the onboarding curve for new developers working in smart
contract technologies. Other libraries are deployed manually with lordKelvin, a Python web3 toolkit built atop Web3.py.

Truflation was initially launched on the Ethereum (ETH) blockchain network, and the team now supports the Binance Smart
Contract (BSC), Avalanche (AVAX), and Polygon (MATIC) networks, as well as all Ethereum Virtual Machine (EVM) networks
supported by Chainlink (LINK).

## Creating the First Inflation-Protected “Flatcoin” Supported by Truflation

Using the Truflation oracle, Rust’s team was able to introduce the industry’s first inflation-protected stablecoin,
Nuon. Rather than being collateralized to traditional financial assets or other cryptocurrencies, Nuon’s price is pegged
to the value of a basket of goods and services spanning twelve separate categories including food and non-alcoholic
beverages, housing, transportation, utilities, education, clothing, and more.

Truflation is the key to Nuon’s success, providing fully transparent and cryptographically verifiable data on-chain to
peg Nuon’s price, ensuring that the token’s holders maintain hedged purchasing power that reflects the growing costs of
the world’s most widely utilized goods and services.

## The Future of Truflation in the Words of Stefan Rust

As the world tokenizes, Stefan Rust is working to provide an independent source for truth on all pricing data by working
with derivative exchanges, futures markets, commodity exchanges and more, while delivering resulting data on a scalable
and modern platform built for the future.

Going a step further, Rust is committed to illustrating the reliability of Truflation’s robust oracle by creating and
continuing to build a one-of-its-kind flatcoin protocol, providing the most accurate and up to date on-chain hedge
against inflation available to the web3 market.

With transparency and access being among the most attractive features of blockchain technology, Rust’s project is
leading a charge toward smarter and more accurate interpretations of global markets to provide users with insights that
pace our evolving financial landscape.

“What Bloomberg or Reuters are to TradFi, we will be for web3 with all the web3 assets and attributes and values.” -
Stefan Rust, Founder, Truflation & Nuon Finance
