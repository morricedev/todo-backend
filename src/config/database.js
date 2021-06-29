const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

module.exports = mongoose
  .connect("mongodb://localhost/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log("Connected on DB", con.version))
  .catch(() => console.log("An error occurred"));
