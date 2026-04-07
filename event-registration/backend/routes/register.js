const express = require("express");
const router = express.Router();
const db = require("../db");

// Register API
router.post("/", (req, res) => {
    const { name, event } = req.body;

    if (!name || !event) {
        return res.json({ message: "All fields required" });
    }

    const sql = "INSERT INTO registrations (name, event) VALUES (?, ?)";
    db.query(sql, [name, event], (err) => {
        if (err) {
            console.log(err);
            return res.json({ message: "Error" });
        }
        res.json({ message: "Registration Successful 🎉" });
    });
});

// Get data
router.get("/", (req, res) => {
    db.query("SELECT * FROM registrations", (err, data) => {
        if (err) return res.json(err);
        res.json(data);
    });
});

module.exports = router;