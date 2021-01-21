// require express router
const router = require("express").Router();

// require models to use its database functions.
var db = require("../models");

//get all workouts on page load
// ===========================================

router.get("/api/workouts", (req, res) => {
     db.Workout.aggregate([
          {
               $addFields: {
                    totalDuration: {
                         $sum: "$exercises.duration",
                    },
               },
          },
     ])

          .then((dbWorkout) => {
               console.log(dbWorkout);
               res.json(dbWorkout);
          })
          .catch((err) => {
               console.log(err);
               res.status(400).json(err);
          });
});

// create workout to the database's collection
// ===========================================

router.post("/api/workouts", ({ body }, res) => {
     db.Workout.create(body)
          .then((dbWorkout) => {
               console.log(dbWorkout);
               res.json(dbWorkout);
          })
          .catch((err) => {
               console.log(err);
               res.status(500).json(err);
          });
});

// Update one workout in the database's collection by it's Id
// ===========================================

router.put("/api/workouts/:id", (req, res) => {
     db.Workout.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { exercises: req.body } }
     )
          .then((dbWorkout) => {
               console.log(dbWorkout);
               res.json(dbWorkout);
          })
          .catch((err) => {
               console.log(err);
               res.status(500).json(err);
          });
});

// get the total duration of each workout from the last seven workouts
// ================================================================

router.get("/api/workouts/range", (req, res) => {
     db.Workout.aggregate([
          {
               $addFields: {
                    totalDuration: {
                         $sum: "$exercises.duration",
                    },
               },
          },
     ])
          .limit(7)
          .sort({ _id: -1 })
          .then((dbWorkout) => {
               console.log(dbWorkout);
               res.json(dbWorkout);
          })
          .catch((err) => {
               console.log(err);
               res.status(400).json(err);
          });
});

module.exports = router;
