const { ResponseWrapper } = require('@app/routes/_generic/responseWrapper');

class TaskExecutionResponseWrapper extends ResponseWrapper {
    getObjectLinks(object) {
        const links = super.getObjectLinks(object);
        links.user = `http://localhost:3000/users/${object.userId}`;
        return links
    }
}

const wrapper = new TaskExecutionResponseWrapper('http://localhost:3000/tasks');
module.exports = wrapper;