const express = require("express");
const db = require("../db/connection");

const router = express.Router();

router.post("/orders/place", (req, res) => {

    const { user_id, product_id } = req.body;

    const sql =
        "INSERT INTO orders (user_id, product_id) VALUES (?, ?)";

    db.query(
        sql,
        [user_id, product_id],
        (err, result) => {

            if (err) {
                return res.status(500).send(err);
            }

            res.send("Order placed successfully");

        }
    );

});

router.get("/orders", (req, res) => {

    const sql = `
    SELECT orders.id,
           users.username,
           products.name,
           orders.status
    FROM orders
    JOIN users
    ON orders.user_id = users.id
    JOIN products
    ON orders.product_id = products.id
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).send(err);
        }

        res.json(result);

    });

});

module.exports = router;