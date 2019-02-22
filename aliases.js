const path = require('path');

const relativeAliases = [
  ['Base', './base'],
  ['baseSass', './base/scss/'],
  ['Features', './features/'],
  ['Common', './features/Common/'],
  ['BTRedux', './redux'],
];

const absoluteAliases = {};
relativeAliases.map((alias) => {
  absoluteAliases[alias[0]] = path.resolve(__dirname, alias[1]);
  return null;
});

module.exports.relativeAliases = relativeAliases;
module.exports.absoluteAliases = absoluteAliases;
