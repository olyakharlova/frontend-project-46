import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const firstJSON = getFixturePath('file1.json');
const secondJSON = getFixturePath('file2.json');
const firstYml = getFixturePath('file1.yml');
const secondYml = getFixturePath('file2.yml');

const resStr = '- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true';

test('json files comparison', () => {
  expect(genDiff(firstJSON, secondJSON)).toEqual(resStr);
});

test('yml files comparison', () => {
  expect(genDiff(firstYml, secondYml)).toEqual(resStr);
});
