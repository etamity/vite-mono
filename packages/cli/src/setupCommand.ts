/**
 * @license
 * Copyright Websublime All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://websublime.dev/license
 */

import arg from 'arg';
import { Command, createCommand } from 'commander';

import * as commands from './commands';
import { getCommandWorkDir } from './utils';

const args = arg(
  {
    '--config': String,
    '--root': String,
    '--target': String,
    '--logLevel': String,
    '--clearScreen': Boolean,
    '--debug': String,
    '--filter': String,
    '-c': '--config',
    '-r': '--root',
    '-l': '--logLevel',
    '-d': '--debug',
    '-f': '--filter',
  },
  {
    permissive: true,
  }
);

const commander = createCommand() as Command;

commander.allowUnknownOption(false);

commander
  .version('0.0.1')
  .description('Vite monorepo apps')
  .option(
    '-c, --config <file>',
    `[string] use specified config file`,
    args['--config'] || 'vite.config'
  )
  .option(
    '-t, --target <target>',
    `[string] use specified serving target`,
    args['--target'] || 'web'
  )
  .option(
    '-r, --root <path>',
    `[string] use specified root directory`,
    args['--root'] || getCommandWorkDir()
  )
  .option(
    '-l, --logLevel <level>',
    `[string] silent | error | warn | all`,
    args['--logLevel'] || 'all'
  )
  .option(
    '--clearScreen',
    `[boolean] allow/disable clear screen when logging`,
    args['--clearScreen'] || false
  )
  .option(
    '-d, --debug [feat]',
    `[string | boolean] show debug logs`,
    args['--debug'] || false
  )
  .option(
    '-f, --filter <filter>',
    `[string] filter debug logs`,
    args['--filter'] || undefined
  );

const options = commander.opts() as GlobalOptions;

Object.entries(commands).forEach(([_, setupCommand]) =>
  setupCommand(commander, options)
);

export { commander };
