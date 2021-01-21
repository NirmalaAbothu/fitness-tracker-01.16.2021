// Requiring necessary npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting up port
const PORT = process.env.PORT || 3000;

// Creating express app
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
// =============================================================
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/html-routes.js"));

// connecting to mOngodb
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//      useCreateIndex: true,
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
     useFindAndModify: false,
});
//app listening on PORT
app.listen(PORT, () => {
     console.log(`App running on port ${PORT}!`);
});
