import { readFile, getExtension } from './reading.js';
import build from './builder.js';
import parse from './parsers.js';
import stylish from './formatters/stylish.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);

  const object1 = parse(file1, getExtension(filepath1));
  const object2 = parse(file2, getExtension(filepath2));

  const res = build(object1, object2);
  const str = stylish(res);

  return str;
};

export default genDiff;
