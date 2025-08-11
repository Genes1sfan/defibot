import axios from 'axios';
import { z } from 'zod';
import { env } from '../config/env.js';
const UNISWAP_API_BASE = 'https://api.uniswap.org/v1';
const QuoteRequestSchema = z.object({
    chainId: z.number(),
    tokenIn: z.string(),
    tokenOut: z.string(),
    amountIn: z.string(), // in wei as string
    recipient: z.string().optional(),
});
const QuoteResponseSchema = z.object({
    quote: z.object({
        amountOut: z.string(),
        amountIn: z.string(),
        route: z.any().optional(),
    }),
    transaction: z
        .object({
        to: z.string(),
        data: z.string(),
        value: z.string().default('0'),
        gas: z.string().optional(),
        gasPrice: z.string().optional(),
        maxFeePerGas: z.string().optional(),
        maxPriorityFeePerGas: z.string().optional(),
    })
        .optional(),
});
export async function getSwapQuote(req) {
    const parsed = QuoteRequestSchema.parse(req);
    const headers = {
        'content-type': 'application/json',
    };
    if (env.UNISWAP_API_KEY)
        headers['x-api-key'] = env.UNISWAP_API_KEY;
    const params = new URLSearchParams({
        chainId: String(parsed.chainId),
        tokenIn: parsed.tokenIn,
        tokenOut: parsed.tokenOut,
        amount: parsed.amountIn,
    });
    if (parsed.recipient)
        params.set('recipient', parsed.recipient);
    const url = `${UNISWAP_API_BASE}/swap/quote?${params.toString()}`;
    const { data } = await axios.get(url, { headers });
    return QuoteResponseSchema.parse(data);
}
export async function buildSwapCalldata(req) {
    const quote = await getSwapQuote(req);
    if (!quote.transaction) {
        throw new Error('No transaction data returned from Uniswap API');
    }
    return {
        chainId: req.chainId,
        to: quote.transaction.to,
        valueWei: quote.transaction.value ?? '0',
        data: quote.transaction.data,
    };
}
//# sourceMappingURL=uniswap.js.map