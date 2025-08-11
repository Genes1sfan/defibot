import type { Address } from 'viem';
import { mainnet, polygon, arbitrum, base, optimism } from 'viem/chains';
export type SupportedChain = typeof mainnet | typeof polygon | typeof arbitrum | typeof base | typeof optimism;
export declare const supportedChains: Record<number, SupportedChain>;
export declare function getChainById(chainId: number): SupportedChain | undefined;
export type TokenInput = {
    chainId: number;
    address: Address;
    decimals?: number;
    symbol?: string;
};
//# sourceMappingURL=tokens.d.ts.map