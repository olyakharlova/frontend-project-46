import _ from 'lodash';

const stringify = (data) => {
  if (_.isPlainObject(data)) {
    return '[complex value]';
  }
  if (typeof data === 'string') {
    return `'${data}'`;
  }

  return String(data);
};

const plain = (obj) => {
  const format = (tree, nestedKeys) => tree
    .map((node) => {
      const property = `Property '${[...nestedKeys, node.key].join('.')}'`;
      switch (node.type) {
        case 'changed':
          return format(node.children, [...nestedKeys, node.key]);
        case 'removed':
          return `${property} was removed`;
        case 'added':
          return `${property} was added with value: ${stringify(node.value2)}`;
        case 'updated':
          return `${property} was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
        case 'unchanged':
          return null;
        default:
          return null;
      }
    }).filter(Boolean).join('\n');
  return `${format(obj, [])}\n`;
};

export default plain;
