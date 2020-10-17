const path = require('path');
const getIconName = require('./scripts/lib/getIconName');
const getStyleObject = require('./scripts/lib/getStyleObject');
const getKeywords = require('./scripts/lib/getKeywords');

const config = {
    iconotekaJson: path.join(__dirname, 'iconoteka', 'iconoteka.json'),
    iconotekaFilesPath: path.join(__dirname, 'iconoteka'),
    figma: {
        apiToken: process.env.FIGMA_TOKEN,
        fileId: 'ai530607BNjKqGAFiOSdNd',
        startNodeId: '0:1',
        requestChunkSize: 600,
        targetDir: path.join(__dirname, 'iconoteka'),
        fillItemProps: item => {

            const styles = getStyleObject(item.name);
            const name = getIconName(item.name);
            const keywords = getKeywords(item.name);
        
            return {
              ...styles,
              name,
              keywords,
              path: item.fileName,
            };
        }
    }
};

module.exports = config;
