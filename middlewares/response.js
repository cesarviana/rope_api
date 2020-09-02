function wrapLinks(req, res) {
    if (!res.links) return {};

    const url = `${req.protocol}//${req.get('Host')}`;

    return Object.values(res.links).map(link => {
        link.url = `${url}/${link.url}`;
    })
}

module.exports = (req, res) => {
    const body = {
        data: res.data,
        links: wrapLinks(req, res)
    };
    res.json(body);
    // res.json(res.data);
};