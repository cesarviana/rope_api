function getUrl(req) {
    return `${req.protocol}://${req.get('Host')}`;
}

function prependUrl(url, links) {
    Object.keys(links).forEach(key => {
        links[key] = url + links[key];
    });
    return links
}

function buildSemanticResponse(url, data, linker) {
    if(data instanceof Array)
        return buildSemanticResponseForArray(url, data, linker);

    let links = linker(data);
    links = prependUrl(url, links);
    return {
        data,
        links
    }
}

function buildSemanticResponseForArray(url, dataArray, linker) {
    const data = dataArray.map(item => {
        let links = linker(item);
        links = prependUrl(url, links);
        return {
            data: item,
            links
        }
    });
    return {
        data,
        links: {
            next: '',
            previous: ''
        }
    }
}

module.exports = (req, res) => {
    if (res.data && res.links) {
        const url = getUrl(req);
        const data = res.data;
        const links = res.links;
        const semanticResponse = buildSemanticResponse(url, data, links);
        res.json(semanticResponse);
    }
    if (!res.data) {
        res.status(404).send();
    }
};