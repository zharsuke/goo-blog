const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/IndexController');

class IndexRoutes {

    constructor() {
        this.indexController = new IndexController();
    }
    
    getIndex() {
        router.get("/", this.indexController.index);
        return router;
    }
}

module.exports = IndexRoutes;