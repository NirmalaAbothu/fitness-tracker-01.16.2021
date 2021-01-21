var path = require("path");
const router = require("express").Router();
// module.export = function (app) {
router.get("/exercise", function (req, res) {
     console.log(__dirname);
     res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", function (req, res) {
     console.log(__dirname);
     res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Basic route that sends the user first to the AJAX Page
router.get("/", function (req, res) {
     res.sendFile(path.join(__dirname, "../public/index.html"));
});
// };

module.exports = router;
