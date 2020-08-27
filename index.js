const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');
const path = require('path');

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (_, res) => res.send('Hello API'));

const routesDir = path.join(__dirname, 'routes');

fs.readdirSync(routesDir)
    .filter( file=> file.charAt(0) !== '_')
    .forEach(file => {
        const route = `/${file}`;
        const modulePath = path.join(routesDir, file);
        const module = require(modulePath);
        app.use(route, module)
    });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});