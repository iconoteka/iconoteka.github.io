module.exports = function getKeywords(filename) {
  
  const nameParts = filename.split('__');
  
  if (nameParts.length === 1) {
    return [];
  }

  const keywords = nameParts
    // Remove original name
    .slice(1)
    // Join in case of multiple aliases
    .join('_')
    // Split by words
    .split('_')
    // Remove style params
    .slice(0, -2);

  return keywords;
};
