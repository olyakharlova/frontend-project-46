import { readFile } from './reading.js';
import compareObjects from './compare.js';
import format from './formatting.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);

  const object1 = JSON.parse(file1);
  const object2 = JSON.parse(file2);

  const res = compareObjects(object1, object2);
  const str = format(res);

  return str;
};

export default genDiff;
