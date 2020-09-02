module.exports = (error, req, res, next) => {
    console.error(error);
    if (res.headersSent) {
        return next(error);
    }
    res.status(400).send(error)
};