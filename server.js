const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(
    session({
        secret: "secretkey",
        resave: false,
        saveUninitialized: false
    })
);

app.get("/", (req, res) => {
    res.send("E-Commerce Server Running");
});

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");

app.use("/", authRoutes);
app.use("/", productRoutes);
app.use("/", cartRoutes);
app.use("/", orderRoutes);

app.get("/dashboard", (req, res) => {

    console.log(req.session);

    if (!req.session.userId) {
        return res.send("Please login first");
    }

    res.send(
        `Welcome User ${req.session.userId} (${req.session.role})`
    );

});

app.get("/admin", (req, res) => {

    if (!req.session.userId) {
        return res.send("Please login first");
    }

    if (req.session.role !== "admin") {
        return res.send("Access denied");
    }

    res.send("Welcome Admin");

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});