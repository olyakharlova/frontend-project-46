const format = (obj) => obj
  .reduce((acc, item) => {
    switch (true) {
      case item.type === 'deleted':
        acc += `- ${item.name}: ${item.value}\n`;
        break;
      case item.type === 'unchanged':
        acc += `  ${item.name}: ${item.value}\n`;
        break;
      case item.type === 'changed':
        acc += `- ${item.name}: ${item.oldValue}\n`;
        acc += `+ ${item.name}: ${item.newValue}\n`;
        break;
      case item.type === 'added':
        acc += `+ ${item.name}: ${item.value}`;
        break;
      default:
        break;
    }
    return acc;
  }, '');

export default format;
