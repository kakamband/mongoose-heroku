const mongoose = require("mongoose");

const { MONGODB_URI_LIVE, MONGODB_URI_LOCAL } = require("./environment");

mongoose.connect(MONGODB_URI_LIVE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbMongo = mongoose.connection;
module.exports = dbMongo;
