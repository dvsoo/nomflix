const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO || "mongodb://localhost:27017/nomflix-chat",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

const handleError = () => console.log("Error Connection to the Database");

const handleOpen = () => console.log("Connect Database");

db.on("open", handleOpen);
db.on("error", handleError);
