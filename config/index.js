const { PORT, MONGODB_URI_LIVE, MONGODB_URI_LOCAL } = require("./environment");
const dbMongo = require("./database");

module.exports = {
  dbMongo,
  PORT,
  MONGODB_URI_LIVE,
  MONGODB_URI_LOCAL,
};
