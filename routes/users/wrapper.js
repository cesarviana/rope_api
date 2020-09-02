const { ResponseWrapper } = require('@app/routes/_generic/responseWrapper');

class UserResponseWrapper extends ResponseWrapper {

    getObjectLinks(object) {
        const links = super.getObjectLinks(object);
        links.tasks = `http://localhost:3000/taskExecutions/byUser/${object.id}`;
        return links
    }

}

const wrapper = new UserResponseWrapper('http://localhost:3000/users');
module.exports = wrapper;