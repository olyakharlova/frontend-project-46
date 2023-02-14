import _ from 'lodash';

const indent = (depth, times = 4) => ' '.repeat(depth * times);

const stringify = (obj, depth) => {
  if (!_.isPlainObject(obj)) return String(obj);
  const lines = Object.entries(obj)
    .map(([key, value]) => `${indent(depth)}${key}: ${stringify(value, depth + 1)}`);

  return ['{', ...lines, `${indent(depth - 1)}}`].join('\n');
};

const stylish = (tree) => {
  const format = (obj, depth) => {
    const lines = obj.flatMap((node) => {
      switch (node.type) {
        case 'added':
          return `${indent(depth - 1)}  + ${node.key}: ${stringify(node.value2, depth + 1)}`;
        case 'removed':
          return `${indent(depth - 1)}  - ${node.key}: ${stringify(node.value1, depth + 1)}`;
        case 'changed':
          return `${indent(depth)}${node.key}: ${format(node.children, depth + 1)}`;
        case 'unchanged':
          return `${indent(depth)}${node.key}: ${stringify(node.value1, depth + 1)}`;
        case 'updated':
          return [
            `${indent(depth - 1)}  - ${node.key}: ${stringify(node.value1, depth + 1)}`,
            `${indent(depth - 1)}  + ${node.key}: ${stringify(node.value2, depth - 1)}`,
          ];
        default:
          return null;
      }
    });
    return ['{', ...lines, `${indent(depth - 1)}}`].join('\n');
  };
  return format(tree, 1);
};

export default stylish;
