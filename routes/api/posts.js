const express = require('express');

const router = express.Router();

// Route         get api/posts
// description   test route
// access        public
router.get("/", (req, res) => res.send("posts route"));

module.exports = router;