const express = require('express');
const router = express.Router();

class Meta {
    constructor() {
        this.linkers = [];
    }

    for(path, fn) {
        this.linkers.push({path, fn})
    }
}

const meta = new Meta();

meta.for('/:id', (data) => {
    return {
        tasks: `/taskExecution/byUser/${data.id}`,
        users: `/user`
    }
});

meta.for('/', (data) => {
    return {
        href: `/user/${data.id}`
    }
});

router.use('/:id', (req, res, next) => {
    res.links = (user) => {
        return {
            tasks: `/taskExecution/byUser/${user.id}`,
            users: `/user`
        }
    };
    next()
});
router.use('/', (req, res, next) => {
    res.links = (user) => {
        return {
            href: `/user/${user.id}`
        }
    };
    next()
});
module.exports = router;