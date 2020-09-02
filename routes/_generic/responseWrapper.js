class ResponseWrapper {

    constructor(path) {
        this.path = path;
    }

    wrapObject(data) {
        return {
            data,
            links: this.getObjectLinks(data)
        }
    }

    getObjectLinks(object) {
        return {
            list: `${this.path}`,
            href: `${this.path}/${object.id}`
        };
    }


    wrapList(list) {
        const data = list.map(item => {
            return {
                data: item,
                link: this.getObjectLinks(item)
            }
        });
        return {
            data,
            links: this.getListLinks(list)
        }
    }

    getListLinks() {
        return {
            prev: '',
            next: '',
        };
    }
}

module.exports = {ResponseWrapper};