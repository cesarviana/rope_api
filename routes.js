const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, 'routes');

router.get('/', (req, res, next) => {
    res.data = {text: 'Hello!'};
    next()
});

fs.readdirSync(routesDir)
    .filter(file => file.charAt(0) !== '_')
    .forEach(routeFolder => loadModule(routesDir, routeFolder));

function loadModule(modulesDir, moduleFolder) {
    const route = `/${moduleFolder}`;
    const modulePath = path.join(modulesDir, moduleFolder);
    const module = require(modulePath);
    router.use(route, module)
}

module.exports = router;