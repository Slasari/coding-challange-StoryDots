const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connectDb() {
  try {
    await mongoose
      .connect(process.env.URL_CONNECTION_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("======DB connection successful======");
      });

    mongoose.connection.onOpen("open", () => {});
  } catch (e) {
    console.log("Algo como error", e);
  }
}

module.exports = connectDb;
