import { iconoteka, Iconoteka, IconotekaItem } from "./utils/iconoteka";
const path = require('path');
const getIconName = require('./utils/lib/getIconName');
const getStyleObject = require('./utils/lib/getStyleObject');
const getKeywords = require('./utils/lib/getKeywords');

const config = {
    iconotekaJson: path.join(__dirname, 'iconoteka', 'iconoteka.json'),
    iconotekaFilesPath: path.join(__dirname, 'iconoteka'),
    googleAnalyticsId: 'UA-125050250-1', 
    figma: {
        apiToken: process.env.FIGMA_TOKEN,
        fileId: 'ai530607BNjKqGAFiOSdNd',
        startNodeId: '0:1',
        requestChunkSize: 600,
        targetDir: path.join(__dirname, 'iconoteka'),
        fillItemProps: (item: IconotekaItem) => {

            const styles = getStyleObject(item.name);
            const name = getIconName(item.name);
            const keywords = getKeywords(item.name);
        
            return {
              properties: styles,
              name,
              keywords,
              path: item.path,
            };
        }
    },
    filters: [],
    prepareData: (data: Iconoteka): Iconoteka => {
        const iconoteka = {
            name: "",
            items: data.items.map(group => {
                return {
                    name: group.name,
                    items: group.items.filter(item => {
                        return item.properties.isMedium && item.properties.isStroke;
                    })
                }
            })
        }


        return iconoteka;
    },
};

export default config;
