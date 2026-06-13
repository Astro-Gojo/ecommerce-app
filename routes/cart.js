const express = require("express");
const db = require("../db/connection");

const router = express.Router();

router.post("/cart/add", (req, res) => {

    const { user_id, product_id } = req.body;

    const sql =
        "INSERT INTO cart (user_id, product_id) VALUES (?, ?)";

    db.query(
        sql,
        [user_id, product_id],
        (err, result) => {

            if (err) {
                return res.status(500).send(err);
            }

            res.send("Product added to cart");

        }
    );

});

router.get("/cart", (req, res) => {

    const sql = `
    SELECT cart.id,
           products.name,
           products.price
    FROM cart
    JOIN products
    ON cart.product_id = products.id
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).send(err);
        }

        res.json(result);

    });

});

router.delete("/cart/delete/:id", (req, res) => {

    const sql = "DELETE FROM cart WHERE id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if (err) {
            return res.status(500).send(err);
        }

        res.send("Item removed from cart");

    });

});

module.exports = router;