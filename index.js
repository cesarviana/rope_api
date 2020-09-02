const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: '*'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

const {response, errors} = require('./middlewares');
app.use(response);
app.use(errors);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});