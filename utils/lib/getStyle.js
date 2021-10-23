const {getKey, thicknesses, styles } = require('./const');

module.exports = function getStyle(fileName) {
    const [thickness, style] = fileName.split('_').slice(-2);
    return {
        thickness: thicknesses[thickness],
        style: styles[style],
    };
}
