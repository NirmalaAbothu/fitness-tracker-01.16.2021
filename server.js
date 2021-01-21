const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/html-routes");

const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
// =============================================================
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/html-routes.js"));

// require("./routes/apiRoutes")(app);
// require("./routes/html-Routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
});

//

app.listen(PORT, () => {
     console.log(`App running on port ${PORT}!`);
});
