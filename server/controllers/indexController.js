class IndexController {

    index(req, res) {
        return res.json({"message" : "server works!"});
    }

}

module.exports = IndexController;