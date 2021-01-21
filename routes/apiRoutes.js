const router = require("express").Router();
// Import the models to use its database functions.
var db = require("../models");
// const mongojs = require("mongojs");
// const mongoose = require("mongoose");

// api routes
// module.export = function (app) {
// router.get("/api/workouts", (req, res) => {
//      db.Workout.find({})
//           .then((dbWorkout) => {
//                console.log(dbWorkout);
//                res.json(dbWorkout);
//           })
//           .catch((err) => {
//                console.log(err);
//                res.status(500).json(err);
//           });
// });

//

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

// 1. create workout to the database's collection
// POST:
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

// 4. Update one workout in the database's collection by it's ObjectId

// POST: /update/:id

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
