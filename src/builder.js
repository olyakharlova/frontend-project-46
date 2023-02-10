import _ from 'lodash';

const build = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  return _.sortBy(keys)
    .map((key) => {
      if (!_.has(obj2, key)) {
        return {
          type: 'removed', key, value1: obj1[key],
        };
      }
      if (!_.has(obj1, key)) {
        return {
          type: 'added', key, value2: obj2[key],
        };
      }
      if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
        return {
          type: 'changed', key, value1: obj1[key], value2: obj2[key], children: build(obj1[key], obj2[key]),
        };
      }
      if (!_.isEqual(obj1[key], obj2[key])) {
        return {
          type: 'updated', key, value1: obj1[key], value2: obj2[key],
        };
      }
      return {
        type: 'unchanged', key, value1: obj1[key], value2: obj2[key],
      };
    });
};

export default build;
