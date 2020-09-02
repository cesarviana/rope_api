const fs = require('fs');
const path = require('path');

const middlewares = {};

fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .forEach(filename => {
        const moduleName = filename.split(".")[0];
        const modulePath = path.join(__dirname, filename);
        middlewares[moduleName] = require(modulePath)
    });

module.exports = middlewares;