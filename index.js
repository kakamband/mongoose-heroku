const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const { PORT, MONGODB_URI_LIVE } = require("./config");

const localPort = PORT || 5000;

const { dbMongo } = require("./config");

const studentRouter = require("./routes/students/StudentsController");

app.get("/", (req, res) => {
  res.send("test get");
});

app.use(studentRouter)

if (dbMongo) {
  app.listen(localPort, (req, res) => {
    console.log(`server run in ${localPort}`);
    console.log("mongo url:", MONGODB_URI_LIVE);
  });
} else {
  console.log("db mongo tidak connect");
}
