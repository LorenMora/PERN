const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

// middleware
app.use(cors());
//gives access to request.body
app.use(express.json());

app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
});