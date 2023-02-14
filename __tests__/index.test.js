import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';
import { readFile } from '../src/reading.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('nested files comparison, stylish format', () => {
  const res = readFile(getFixturePath('stylish.txt'));
  const nestedJSON1 = getFixturePath('nestedFile1.json');
  const nestedJSON2 = getFixturePath('nestedFile2.json');
  const nestedYML1 = getFixturePath('nestedFile1.yaml');
  const nestedYML2 = getFixturePath('nestedFile2.yaml');
  expect(genDiff(nestedJSON1, nestedJSON2, 'stylish')).toEqual(res);
  expect(genDiff(nestedYML1, nestedYML2, 'stylish')).toEqual(res);
  expect(genDiff(nestedJSON1, nestedYML2, 'stylish')).toEqual(res);
});

test('nested files, plain format', () => {
  const res = readFile(getFixturePath('plain.txt'));
  const nestedJSON1 = getFixturePath('nestedFile1.json');
  const nestedJSON2 = getFixturePath('nestedFile2.json');
  expect(genDiff(nestedJSON1, nestedJSON2, 'plain')).toEqual(res);
});
