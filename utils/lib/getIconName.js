const capitalize = require('./capitalize');

module.exports = function getIconName(filename) {
  
  const nameParts = filename.split('__');
  
  let nameChunks = nameParts[0].split('_')

  if (nameParts.length === 1) {

    // Check for correct chunk names 
    if (nameChunks.length < 3) {
      console.error('Incorrect file name format');
      console.error(`Filename ${filename}`);
      process.exit(1);
    } 
    
    nameChunks = nameChunks.slice(0, -2)    
  }

  const name = nameChunks
    .map(word => capitalize(word))
    .join(' ');

  if (!name) {
    console.warn(`Cannot extract icon name from ${filename}`);
  }

  return name;
};
