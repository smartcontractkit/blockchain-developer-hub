---
title: Smart Contracts
date: '2020-01-01'
author: James May
author_image: /demo/profile.jpeg
author_role: Software Engineer at Chainlink

sidebar_title: Blockchain
sidebar_position: 2
---

A smart contract is a tamper-proof program that runs on a blockchain network when certain predefined conditions are
satisfied.

Smart contracts are computer programs that are hosted and executed on a blockchain network. Each smart contract consists
of code specifying predetermined conditions that, when met, trigger outcomes. By running on a decentralized blockchain
instead of a centralized server, smart contracts allow multiple parties to come to a shared result in an accurate,
timely, and tamper-proof manner. ‍ Smart contracts are a powerful infrastructure for automation because they are not
controlled by a central administrator and are not vulnerable to single points of attack by malicious entities. When
applied to multi-party digital agreements, smart contract applications can reduce counterparty risk, increase
efficiency, lower costs, and provide new levels of transparency into processes.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZE2HxTmxfrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## History of Smart Contracts

Smart contracts were first coined by American computer scientist Nick Szabo in 1994. In his seminal writing, he gave a
broad smart contract definition as follows: “a computerized transaction protocol that executes the terms of a contract,”
with general objectives to “satisfy common contractual conditions, minimize exceptions both malicious and accidental,
and minimize the need for trusted intermediaries.”

While a general notion of smart contracts could be seen in systems like vending machines (e.g., a specific code leads to
an expected snack), blockchains formed the foundation of smart contracts that were digital, tamper-proof, and
permissionless. The introduction of the Bitcoin blockchain in 2009 supported arguably the first protocol smart
contract—establishing a set of conditions that had to be satisfied to transfer Bitcoins between users on the network.
These conditions include the user signing the transaction with the correct private key that matches their public address
(akin to a password linked to a specific account) and the user owning enough funds to cover the transaction.

The Bitcoin blockchain then evolved to offer another major type of smart contract in 2012 called a multi-signature
transaction. A multisig transaction requires a defined number of people (public keys) to sign a transaction with their
private keys before it’s considered valid. This increases the security of user funds by mitigating single point of
failures like a stolen or lost private key.

![Bitcoin Multisig wallet](/posts/blockchain101/smart-contracts/image2.png)

Blockchains began to experiment over the next few years by adding new programmatic conditions (called operation codes or
opcodes). However, the next major leap in smart contracts came upon the publishing of the Ethereum whitepaper by Vitalik
Buterin in 2013. In 2015, Ethereum launched as a new type of blockchain for programmable smart contracts. Instead of the
blockchain acting effectively as a single smart contract application or offering a few limited opcodes, the Ethereum
smart contract blockchain offered a “world computer” that could run many independent smart contracts at the same time.

## How Smart Contracts Work

Smart contracts are tamper-proof programs on blockchains with the following logic: “if/when x event happens, then
execute y action.” One smart contract can have multiple different conditions and one application can have multiple
different smart contracts to support an interconnected set of processes. There are also multiple smart contract
languages for programming, with Ethereum’s Solidity being the most popular.

Any developer can create a smart contract and deploy it on a public blockchain for their own purposes, e.g., a personal
yield aggregator that automatically shifts their funds to the highest-earning application. However, many smart contracts
involve multiple independent parties that may or may not know one another and don’t necessarily trust one another. The
smart contract defines exactly how users can interact with it, involving who can interact with the smart contract, at
what times, and what inputs result in what outputs. The result is multi-party digital agreements that evolve from
today’s probabilistic state, where they will probably execute as desired, to a new deterministic state where they are
guaranteed to execute according to their code.

## History of Smart Contracts

One purpose of a smart contract is to automate a specific business process between a distinct group of entities. These
entities collectively come to an agreement on all the smart contract’s terms like payouts, process flow, and dispute
resolutions. A simple smart contract example for global trade may have terms like:

- Term 1: If the goods arrive on time, then execute a payment from the retailer to the supplier in full amount

- Term 2: If the goods arrive one day late, then execute a payment from the retailer to the supplier for 98% of the full
  amount.

Other smart contracts support public decentralized applications (dApps) that anyone can interact with without needing
any permissions. Public dApps are often open-source so anyone in the world can inspect exactly how they function before
deciding whether or not to interact with them. One example of a public dApp is a decentralized lending/borrowing market,
which may have the following terms:

- Term 1: If the user deposits collateral into the specific smart contract, they can receive a loan that’s up to 50% of
  the value of their collateral (i.e., $100 deposit can borrow up to a $50 loan).

- Term 2: If the user’s collateralization ratio (collateral/outstanding loan value) drops below 200%, then the user’s
  collateral is automatically liquidated and transferred to the lenders to ensure they don’t lose money.

- Term 3: Lenders can deposit funds into a specific contract that other users can borrow from at predefined
  collateralization ratios, while the lender receives a claim to a portion of the interest rate payments.

## Benefits

Most traditional digital agreements involve two parties that don’t know each other, introducing risk that either
participant won’t uphold their commitments. To resolve counterparty risk, digital agreements are often hosted and
executed by larger, centralized institutions like a bank that can enforce the contract’s terms. These digital contracts
can be directly between a user and a large company or involve a large company acting as a trusted intermediary between
two users. While this dynamic allows many contracts to exist that otherwise wouldn’t take on such risk, it also creates
a situation where the larger, centralized institutions exert asymmetrical influence over the contracts.

![Centralized transaction](/posts/blockchain101/smart-contracts/image1.png)

Smart contracts improve upon digital agreements by offering several advantages.

- Security – Running the contract on decentralized blockchain infrastructure ensures there is no central point of
  failure to attack, no centralized intermediary to bribe, and no mechanism for either party or a central admin to use
  to tamper with the outcome.

- Reliability – Having the contract logic redundantly processed and verified by a decentralized network of nodes
  provides strong tamper-proof, uptime, and correctness guarantees that the contract will execute on time according to
  its terms.

- Equitable – Using a decentralized network to host and enforce the terms of the agreement reduces the ability of a
  for-profit middleman to use their position of privilege to rent-seek and siphon off value.

- Efficiency – Automating the backend processes of the agreement—escrow, maintenance, execution, and/or settlement—means
  neither party has to wait for manual data to be entered, the counterparty to fulfill their obligations, or a middleman
  to process the transaction.
