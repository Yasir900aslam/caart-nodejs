const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const mongoose = require("mongoose");
const chalk = require("chalk");
const app = express();

require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.connect(
  process.env.DATABASE_URL || "mongodb://localhost:27017/caart",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("error", (err) => {
  console.log(chalk.red("Error Occured while connecting to database"));
  console.log(chalk.red("Stack Trace"));
  console.log(chalk.redBright(err));
  process.exit(1);
});

mongoose.connection.once("open", () => {
  console.log(chalk.green("Connected to database"));
  require("./routes/index")(app);
});

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(hpp());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client", "public")));
app.use(cors(corsOptions));

module.exports = app;
