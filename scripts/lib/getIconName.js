const capitalize = require('./capitalize');

module.exports = function getIconName(filename) {

  const name = filename
    .split('_')
    .filter(word => word.length > 1)
    .map(word => capitalize(word))
    .join(' ');

  if (!name) {
    console.warn(`Cannot extract icon name from ${filename}`);
  }

  return name;
};
