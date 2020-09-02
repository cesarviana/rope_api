module.exports = (req, res) => {
    if (res.data) {
        res.json(res.data);
    }
    if (!res.data) {
        res.status(404).send();
    }
};