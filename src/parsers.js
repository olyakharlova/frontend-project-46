import yaml from 'js-yaml';

const mapping = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parser = (extension) => mapping[extension];

const parse = (data, extension) => {
  const parseData = parser(extension);
  return parseData(data);
};

export default parse;
