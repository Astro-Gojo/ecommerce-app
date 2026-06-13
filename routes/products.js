const express = require("express");
const db = require("../db/connection");

const router = express.Router();

router.post("/products/add", (req, res) => {

    const { name, price, description } = req.body;

    const sql =
        "INSERT INTO products (name, price, description) VALUES (?, ?, ?)";

    db.query(
        sql,
        [name, price, description],
        (err, result) => {

            if (err) {
                return res.status(500).send(err);
            }

            res.send("Product added successfully");

        }
    );

});

router.get("/products", (req, res) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).send(err);
        }

        res.json(result);

    });

});

router.put("/products/update/:id", (req, res) => {

    const { name, price, description } = req.body;

    const sql =
        "UPDATE products SET name=?, price=?, description=? WHERE id=?";

    db.query(
        sql,
        [name, price, description, req.params.id],
        (err, result) => {

            if (err) {
                return res.status(500).send(err);
            }

            res.send("Product updated successfully");

        }
    );

});

router.delete("/products/delete/:id", (req, res) => {

    const sql = "DELETE FROM products WHERE id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if (err) {
            return res.status(500).send(err);
        }

        res.send("Product deleted successfully");

    });

});

module.exports = router;