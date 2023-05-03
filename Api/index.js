const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const http = require("http");
const indexRoutes = require("./src/routes/indexRoutes.js");
const connectDb = require("./src/db/mongodb.js");
const userRoutes = require("./src/routes/userRoutes.js");
const productRoutes = require("./src/routes/productRoutes.js");
const brandsRoutes = require("./src/routes/brandsRoutes.js");

connectDb();

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoutes);
app.use("/", productRoutes);
app.use("/", brandsRoutes);

server.listen(3001, () => console.log("Ready"));
