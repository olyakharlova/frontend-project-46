#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-h, --help', 'display help for command')
  .action(() => program.outputHelp());

program.parse();
