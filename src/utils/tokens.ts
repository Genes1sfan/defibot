import type { Address } from 'viem';
import { mainnet, polygon, arbitrum, base, optimism } from 'viem/chains';

export type SupportedChain = typeof mainnet | typeof polygon | typeof arbitrum | typeof base | typeof optimism;

export const supportedChains: Record<number, SupportedChain> = {
  [mainnet.id]: mainnet,
  [polygon.id]: polygon,
  [arbitrum.id]: arbitrum,
  [base.id]: base,
  [optimism.id]: optimism,
};

export function getChainById(chainId: number): SupportedChain | undefined {
  return supportedChains[chainId];
}

export type TokenInput = {
  chainId: number;
  address: Address;
  decimals?: number;
  symbol?: string;
};