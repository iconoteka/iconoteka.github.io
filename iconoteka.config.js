const path = require('path');

// Workaround to avoid errors on inconoteka-engine postinstall time
let iconotekaJson = '';
let iconotekaFilesPath = '';

try {
    iconotekaJson = path.join(path.dirname(require.resolve('iconoteka')), 'iconoteka.json');
    iconotekaFilesPath = path.join(path.dirname(require.resolve('iconoteka')), 'iconoteka');
} catch(e) {

}

const config = {
    iconotekaJson,
    iconotekaFilesPath,
    googleAnalyticsId: 'UA-125050250-1', 
};

module.exports = config;
