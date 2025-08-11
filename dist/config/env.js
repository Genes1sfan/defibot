import dotenv from 'dotenv';
import { z } from 'zod';
dotenv.config();
const EnvSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    TELEGRAM_BOT_TOKEN: z.string().min(1, 'TELEGRAM_BOT_TOKEN is required').optional(),
    UNISWAP_API_KEY: z.string().min(1, 'UNISWAP_API_KEY is required').optional(),
});
const parsed = EnvSchema.safeParse(process.env);
if (!parsed.success) {
    const formatted = parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('\n');
    console.warn('Warning: invalid or missing env vars:\n' + formatted);
}
export const env = {
    NODE_ENV: parsed.success ? parsed.data.NODE_ENV : 'development',
    TELEGRAM_BOT_TOKEN: parsed.success ? parsed.data.TELEGRAM_BOT_TOKEN : undefined,
    UNISWAP_API_KEY: parsed.success ? parsed.data.UNISWAP_API_KEY : undefined,
};
//# sourceMappingURL=env.js.map