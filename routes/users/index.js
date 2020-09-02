const router = require('@app/routes/_generic/router');

const service = require('./service');
const wrapper = require('./wrapper');
module.exports = router(service, wrapper);