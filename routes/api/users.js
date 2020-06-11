const express = require('express');

const { check, validationResult } = require("express-validator");

const router = express.Router();

// Route         POST api/users
// description   Register user
// access        public
router.post("/", [
    check("name", "Name is required").not().isEmpty(), // name require and check not empty
    check("email", "Please enter valid email address").isEmail(), // vlaidate
    check("password", "Please enter 8 or more then 8 cheracter").isLength({ min: 8 }) // validate
], (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send("User route")
});

module.exports = router;