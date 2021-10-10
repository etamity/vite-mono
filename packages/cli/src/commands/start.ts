import { Command } from 'commander';

async function initAction(
  command: Command & InitOptions,
  options: GlobalOptions
) {
  console.log('start...', command, options);
}

export default function (
  command: Command & InitOptions,
  globalOptions: GlobalOptions
) {
  command
    .command('start')
    .description('start web dev server')
    .action((cmd) => initAction(cmd, globalOptions));
}
