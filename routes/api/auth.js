const express = require('express');

const router = express.Router();

// Route         get api/auth
// description   test route
// access        public
router.get("/", (req, res) => res.send("auth route"));

module.exports = router;