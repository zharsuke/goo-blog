const express = require('express');
const cors = require('cors');
const IndexRoutes = require('./routes/IndexRoutes');

const init = () => {
    const app = express();

    app.use(cors());

    app.use(express.json());

    const indexRoutes = new IndexRoutes();
    app.use(indexRoutes.getIndex());

    app.listen(8080, () => {
        console.log("Server listening on port 8080");
    });
}

init();