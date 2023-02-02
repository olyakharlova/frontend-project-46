#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-h, --help', 'display help for command')
  .option('-f, --format <type>', 'output format')
  .action(() => program.outputHelp());

program.parse();
