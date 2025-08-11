# DeFi Messenger Bot (Uniswap + SuperHero-ready)

A TypeScript bot scaffolding that can run in messenger platforms and prepare Uniswap swap calldata and EIP-681 links for wallets like SuperHero.

## Features
- Telegram adapter with `/swap <chainId> <tokenIn> <tokenOut> <amountInWei>`
- Uses Uniswap Labs API to get quotes and transaction calldata
- Generates EIP-681 links that compatible wallets can open
- Modular to add other messengers and adapters later

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment file and fill values:
   ```bash
   cp .env.example .env
   # put TELEGRAM_BOT_TOKEN and UNISWAP_API_KEY if you have one
   ```
3. Build and run:
   ```bash
   npm run build
   npm start
   ```

## Commands
- Telegram:
  - `/swap <chainId> <tokenIn> <tokenOut> <amountInWei>`

Example on Ethereum Mainnet WETH->USDC for 0.01 WETH:
- chainId: 1
- tokenIn: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
- tokenOut: 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
- amountInWei: 10000000000000000

## Notes
- SuperHero supports Ethereum and WalletConnect. EIP-681 links are provided for deep linking. WalletConnect integration can be added in a follow-up.
- For Uniswap API usage, an API key may be required or improve rate limits.