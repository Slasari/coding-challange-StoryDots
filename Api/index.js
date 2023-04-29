const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const http = require("http");
const indexRouter = require("./src/routes/indexRouter.js");
const connectDb = require("./src/db/mongodb.js");
const userRouters = require("./src/routes/userRouters.js");
const productRouters = require("./src/routes/productRouters.js");

connectDb();

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouters);
app.use("/", productRouters);

server.listen(3001, () => console.log("Ready"));
