import { mainnet, polygon, arbitrum, base, optimism } from 'viem/chains';
export const supportedChains = {
    [mainnet.id]: mainnet,
    [polygon.id]: polygon,
    [arbitrum.id]: arbitrum,
    [base.id]: base,
    [optimism.id]: optimism,
};
export function getChainById(chainId) {
    return supportedChains[chainId];
}
//# sourceMappingURL=tokens.js.map