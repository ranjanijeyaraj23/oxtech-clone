import { Code2, Layers, Image, Shield } from "lucide-react";

export const services = [
  {
    id: "smart-contract",
    title: "Smart Contract Development",
    icon: Code2,
    description:
      "Secure, audited smart contracts for blockchain platforms.",
    features: [
      "Solidity & Rust expertise",
      "Gas optimization",
      "Security audits",
      "Multi-chain compatibility",
    ],
    color: "#3bb273",
  },
  {
    id: "dapp",
    title: "DApp Development",
    icon: Layers,
    description:
      "End-to-end decentralized application development.",
    features: [
      "Frontend & backend",
      "Wallet integration",
      "Scalable architecture",
      "Cross-chain support",
    ],
    color: "#00c2ff",
  },
  {
    id: "nft",
    title: "NFT Marketplaces",
    icon: Image,
    description:
      "Custom NFT platforms for digital assets.",
    features: [
      "Minting systems",
      "Marketplace UI",
      "Royalties",
      "IPFS integration",
    ],
    color: "#a855f7",
  },
  {
    id: "defi",
    title: "DeFi Solutions",
    icon: Shield,
    description:
      "Secure and scalable DeFi protocols.",
    features: [
      "Liquidity pools",
      "Staking systems",
      "Yield farming",
      "Protocol audits",
    ],
    color: "#f59e0b",
  },
];
