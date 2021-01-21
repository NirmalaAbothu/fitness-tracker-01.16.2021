// Requiring necessary npm packages
const mongoose = require("mongoose");

// ODM schema
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
     date: {
          type: Date,
          default: Date.now,
     },
     exercises: [
          {
               type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type",
               },
               name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name",
               },
               duration: {
                    type: Number,
                    required: "Enter an exercise duration",
               },
               weight: {
                    type: Number,
               },
               reps: {
                    type: Number,
               },
               sets: {
                    type: Number,
               },
          },
     ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
