const path = require('path');

const config = {
    iconotekaJson: path.join(path.dirname(require.resolve('iconoteka')), 'iconoteka.json'),
    iconotekaFilesPath: path.join(path.dirname(require.resolve('iconoteka')), 'iconoteka')
};

module.exports = config;
