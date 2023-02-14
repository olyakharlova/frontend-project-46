import { readFileSync } from 'fs';
import path from 'path';

export const getExtension = (filePath) => path.extname(filePath).slice(1);

const getPath = (file) => path.resolve(process.cwd(), file);

export const readFile = (filepath) => readFileSync(getPath(filepath), 'utf-8');
