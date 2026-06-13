const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db/connection");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql =
            "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";

        db.query(
            sql,
            [username, hashedPassword, role || "user"],
            (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }

                res.send("User registered successfully");
            }
        );
    } catch (error) {
        res.status(500).send("Registration failed");
    }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    const sql = "SELECT * FROM users WHERE username = ?";

    db.query(sql, [username], async (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (result.length === 0) {
            return res.send("User not found");
        }

        const user = result[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.send("Invalid password");
        }

        req.session.userId = user.id;
        req.session.role = user.role;

        res.send("Login successful");
    });
});

module.exports = router;