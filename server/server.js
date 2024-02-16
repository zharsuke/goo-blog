const express = require('express');
const cors = require('cors');
const routes = require('./routes/IndexRoutes');

const init = () => {
    const app = express();

    app.use(cors());

    app.use(express.json());

    app.use(routes.getIndex());

    app.listen(8080, () => {
        console.log("Server listening on port 8080");
    });
}

init();