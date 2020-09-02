const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, 'routes');

function loadModule(modulesDir, moduleFolder, app) {
    const route = `/${moduleFolder}`;
    const modulePath = path.join(modulesDir, moduleFolder);
    const module = require(modulePath);
    app.use(route, module)
}

module.exports = app => {

    app.get('/', (req, res, next) => {
        res.data = {text: 'Hello!'};
        next()
    });

    fs.readdirSync(routesDir)
        .filter(file => file.charAt(0) !== '_')
        .forEach(routeFolder => loadModule(routesDir, routeFolder, app))
};