import stylish from './stylish.js';
import plain from './plain.js';

const format = (data, formatName) => {
  if (formatName === 'plain') {
    return plain(data);
  }
  if (formatName === 'stylish') {
    return stylish(data);
  }
  return `${JSON.stringify(data)}\n`;
};

export default format;
