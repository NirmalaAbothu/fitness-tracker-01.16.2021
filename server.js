const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
});

// api routes
app.get("/api/workouts", (req, res) => {
     db.Workout.find({})
          .then((dbWorkout) => {
               res.json(dbWorkout);
          })
          .catch((err) => {
               res.json(err);
          });
});

// 1. create workout to the database's collection
// POST:
// ===========================================
app.post("/api/workouts", (req, res) => {
     db.Workout.create({ type: "workout" })
          .then((dbWorkout) => {
               console.log(dbWorkout);
          })
          .catch(({ message }) => {
               console.log(message);
          });
});

// 4. Update one workout in the database's collection by it's ObjectId

// POST: /update/:id
// ================================================================
app.post("/api/workouts/:id", (req, res) => {
     const id = req.params.id;
     db.Workout.update(
          {
               _id: mongojs.ObjectId(id),
          },
          {
               $set: {
                    type: req.body.type,
                    name: req.body.name,
                    duration: req.body.duration,
                    weight: req.body.weight,
                    reps: req.body.reps,
                    sets: req.body.sets,
               },
          },
          (err, data) => {
               if (err) {
                    console.log(err);
                    res.send(err);
               } else {
                    res.send(data);
               }
          }
     );
});

//

app.listen(PORT, () => {
     console.log(`App running on port ${PORT}!`);
});
