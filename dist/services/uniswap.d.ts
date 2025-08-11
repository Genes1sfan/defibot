import { z } from 'zod';
import type { Address } from 'viem';
declare const QuoteRequestSchema: z.ZodObject<{
    chainId: z.ZodNumber;
    tokenIn: z.ZodString;
    tokenOut: z.ZodString;
    amountIn: z.ZodString;
    recipient: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    chainId: number;
    tokenIn: string;
    tokenOut: string;
    amountIn: string;
    recipient?: string | undefined;
}, {
    chainId: number;
    tokenIn: string;
    tokenOut: string;
    amountIn: string;
    recipient?: string | undefined;
}>;
export type QuoteRequest = z.infer<typeof QuoteRequestSchema>;
declare const QuoteResponseSchema: z.ZodObject<{
    quote: z.ZodObject<{
        amountOut: z.ZodString;
        amountIn: z.ZodString;
        route: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        amountIn: string;
        amountOut: string;
        route?: any;
    }, {
        amountIn: string;
        amountOut: string;
        route?: any;
    }>;
    transaction: z.ZodOptional<z.ZodObject<{
        to: z.ZodString;
        data: z.ZodString;
        value: z.ZodDefault<z.ZodString>;
        gas: z.ZodOptional<z.ZodString>;
        gasPrice: z.ZodOptional<z.ZodString>;
        maxFeePerGas: z.ZodOptional<z.ZodString>;
        maxPriorityFeePerGas: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        to: string;
        data: string;
        gas?: string | undefined;
        gasPrice?: string | undefined;
        maxFeePerGas?: string | undefined;
        maxPriorityFeePerGas?: string | undefined;
    }, {
        to: string;
        data: string;
        value?: string | undefined;
        gas?: string | undefined;
        gasPrice?: string | undefined;
        maxFeePerGas?: string | undefined;
        maxPriorityFeePerGas?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    quote: {
        amountIn: string;
        amountOut: string;
        route?: any;
    };
    transaction?: {
        value: string;
        to: string;
        data: string;
        gas?: string | undefined;
        gasPrice?: string | undefined;
        maxFeePerGas?: string | undefined;
        maxPriorityFeePerGas?: string | undefined;
    } | undefined;
}, {
    quote: {
        amountIn: string;
        amountOut: string;
        route?: any;
    };
    transaction?: {
        to: string;
        data: string;
        value?: string | undefined;
        gas?: string | undefined;
        gasPrice?: string | undefined;
        maxFeePerGas?: string | undefined;
        maxPriorityFeePerGas?: string | undefined;
    } | undefined;
}>;
export type QuoteResponse = z.infer<typeof QuoteResponseSchema>;
export declare function getSwapQuote(req: QuoteRequest): Promise<QuoteResponse>;
export type BuildTxResult = {
    chainId: number;
    to: Address;
    valueWei: string;
    data: string;
};
export declare function buildSwapCalldata(req: QuoteRequest): Promise<BuildTxResult>;
export {};
//# sourceMappingURL=uniswap.d.ts.map