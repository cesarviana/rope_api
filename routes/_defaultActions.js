module.exports = {
    post: async (req, res, service) => {
        try {
            const saved = await service.save(req.body);
            res.json(saved).sendStatus(200)
        } catch (error) {
            res.sendStatus(400)
        }
    }
};