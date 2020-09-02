function getUrl(req) {
    return `${req.protocol}://${req.get('Host')}`;
}

function prependUrl(url, links) {
    Object.keys(links).forEach(key => {
        links[key] = url + links[key];
    });
    return links
}

module.exports = (req, res) => {
    if (res.data) {
        res.json(res.data);
    }
    if (!res.data) {
        res.status(404).send();
    }
};