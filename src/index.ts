import { env } from './config/env.js';
import { startTelegramBot } from './adapters/telegram.js';

async function main() {
  console.log(`Starting bot in ${env.NODE_ENV} mode`);

  await startTelegramBot();

  console.log('Bot(s) initialized');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});