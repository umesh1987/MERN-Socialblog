const express = require('express');

const router = express.Router();

// Route         get api/profile
// description   test route
// access        public
router.get("/", (req, res) => res.send("profile route"));

module.exports = router;