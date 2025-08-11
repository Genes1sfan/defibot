import { Telegraf } from 'telegraf';
import { env } from '../config/env.js';
import { buildSwapCalldata } from '../services/uniswap.js';
import { buildEip681 } from '../utils/eip681.js';
export async function startTelegramBot() {
    if (!env.TELEGRAM_BOT_TOKEN) {
        console.warn('TELEGRAM_BOT_TOKEN not set; Telegram bot disabled');
        return;
    }
    const bot = new Telegraf(env.TELEGRAM_BOT_TOKEN);
    bot.start((ctx) => ctx.reply('Welcome! Use /swap <chainId> <tokenIn> <tokenOut> <amountInWei>'));
    bot.command('swap', async (ctx) => {
        try {
            const parts = ctx.message?.text?.trim().split(/\s+/) ?? [];
            if (parts.length < 5) {
                await ctx.reply('Usage: /swap <chainId> <tokenIn> <tokenOut> <amountInWei>');
                return;
            }
            const chainId = Number(parts[1]);
            const tokenIn = String(parts[2]);
            const tokenOut = String(parts[3]);
            const amountIn = String(parts[4]);
            const tx = await buildSwapCalldata({ chainId, tokenIn, tokenOut, amountIn });
            const eip681 = buildEip681({ chainId, to: tx.to, valueWei: tx.valueWei, data: tx.data });
            await ctx.reply([
                `Calldata ready for chain ${chainId}:`,
                `to: ${tx.to}`,
                `value: ${tx.valueWei}`,
                `data: ${tx.data.substring(0, 16)}... (${tx.data.length} chars)`,
                '',
                'EIP-681 link (open in compatible wallet):',
                eip681,
            ].join('\n'));
        }
        catch (err) {
            console.error(err);
            await ctx.reply('Failed to get quote: ' + (err?.message ?? 'Unknown error'));
        }
    });
    await bot.launch();
    console.log('Telegram bot started');
}
//# sourceMappingURL=telegram.js.map