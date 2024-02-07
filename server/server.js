const express = require('express');
const app = express();

const init = () => {
    app.get("/api", (req, res) => {
        res.json({"message" : "api works!"});
    });

    app.listen(8080, () => {
        console.log("Server listening on port 8080");
    });
}

init();