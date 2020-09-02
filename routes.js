const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, 'routes');

module.exports = app => {

    app.get('/', (req, res, next) => {
        res.data = {text: 'Hello!'};
        next()
    });

    fs.readdirSync(routesDir)
        .filter(file => file.charAt(0) !== '_')
        .forEach(file => {
            const route = `/${file}`;
            const modulePath = path.join(routesDir, file);
            const module = require(modulePath);
            app.use(route, module)
        });
};