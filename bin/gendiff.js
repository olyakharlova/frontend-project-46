#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .helpOption('-h, --help', 'display help for command')
  .option('-f, --format [plain, stylish]', 'output format', 'stylish')
  .action((filepath1, filepath2, formatter) => {
    console.log(genDiff(filepath1, filepath2, formatter.format));
  });

program.parse();
