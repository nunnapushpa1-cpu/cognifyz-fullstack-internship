const express = require("express");

const app = express();

const PORT = 3000;

let students = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        error: null,
        formData: {}
    });
});

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
console.log("POST route loaded");

app.post("/submit", (req, res) => {

    const {
        name,
        email,
        phone,
        address,
        age,
        gender,
        course
    } = req.body;

    // Server-side Validation

    if (!name || name.length < 3) {
        return res.render("index", {
    error: "Name must contain at least 3 characters.",
    formData: req.body
});
    }

    if (!email.includes("@")) {
        return res.render("index", {
    error: "Invalid Email Address.",
    formData: req.body
});
    }

    if (phone.length !== 10) {
        return res.render("index", {
    error: "Phone Number must contain 10 digits.",
    formData: req.body
});
    }

    if (age < 18 || age > 60) {
        return res.render("index", {
    error: "Age must be between 18 and 60.",
    formData: req.body
});
    }

    students.push({
    name,
    email,
    phone,
    address: req.body.address,
    age,
    gender,
    course
});

res.render("success", {
        name,
        email,
        phone,
        address: req.body.address,
        age,
        gender,
        course
    });

});

app.get("/students", (req, res) => {
    res.render("students", {
        students
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});