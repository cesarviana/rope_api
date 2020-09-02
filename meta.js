const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, 'routes');

const routeFolders = fs.readdirSync(routesDir)
    .filter(folder => folder.charAt(0) !== '_');

// routeFolders.forEach(folder => loadMetaRoute(folder));

function loadMetaRoute(folder) {
    const modulePath = path.join(routesDir, folder, 'meta.js');
    if (fs.existsSync(modulePath)) {
        const metaModule = require(modulePath);
        router.use(`/${folder}`, metaModule)
    }
}

module.exports = router;