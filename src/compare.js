import _ from 'lodash';

const isContainsKey = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

const compareObjects = (object1, object2) => {
  const uniqueKeys = new Set([
    ...Object.keys(object1),
    ...Object.keys(object2),
  ]);

  const sorted = _.sortBy([...uniqueKeys]);

  return sorted
    .map((key) => {
      if (!isContainsKey(object1, key)) return { name: key, value: object2[key], type: 'added' };

      if (!isContainsKey(object2, key)) return { name: key, value: object1[key], type: 'deleted' };

      if (object1[key] === object2[key]) return { name: key, value: object1[key], type: 'unchanged' };

      return {
        name: key,
        oldValue: object1[key],
        newValue: object2[key],
        type: 'changed',
      };
    });
};

export default compareObjects;
