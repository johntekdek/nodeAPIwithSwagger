const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotEnv = require("dotenv").config();
const cors = require("cors");
const crudRepository = require("./database/crudRespository");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

crudRepository.createConnection();

app.use("/api/v1/user", require("./routes/userRoutes"));

const port = process.env.PORT;

app.listen(port, () => console.log(`Listening live on ${port}`));
