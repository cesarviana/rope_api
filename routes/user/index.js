const router = require('@app/routes/_generic/router');

const service = require('./service');
module.exports = router(service);