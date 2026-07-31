const express = require("express");

const session = require("express-session");
const bcrypt = require("bcrypt");

const app = express();
const ADMIN = {
    email: "admin@studenthub.com",
    password: "Admin@123"
};
const requireAdmin = require("./middleware/auth");
const PORT = process.env.PORT || 3000;

let students = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use(session({
    secret: "studenthub-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

app.get("/", (req, res) => {
    res.render("index", {
        error: null,
        formData: {}
    });
});

app.get("/register", (req, res) => {

    res.render("register", {
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

// ===============================
// REST API
// ===============================

// Get all students
app.get("/api/students", (req, res) => {
    res.json(students);
});

// Add new student

app.post("/api/students", (req, res) => {

    const { name, email, phone, address, age, gender, course } = req.body;

    if (!name || !email || !phone || !address || !age || !gender || !course) {
        return res.status(400).json({
            message: "All fields are required."
        });
    }

    const student = {
        name,
        email,
        phone,
        address,
        age,
        gender,
        course
    };

    students.push(student);

    res.status(201).json({
        message: "Student added successfully",
        student
    });

});

// Delete Student

app.get("/delete/:id", (req, res) => {

    const id = req.params.id;

    students.splice(id, 1);

    res.redirect("/students");

});

// Edit Student

app.get("/edit/:id", (req, res) => {

    const id = req.params.id;

    const student = students[id];

    res.render("edit", {
        id,
        student
    });

});

// Update Student

app.post("/update/:id", (req, res) => {

    const id = req.params.id;

    students[id] = req.body;

    res.redirect("/students");

});

app.get("/admin", (req, res) => {

    res.render("admin-login");

});

app.post("/admin/login", async (req, res) => {

    const { email, password } = req.body;

    if (
        email === ADMIN.email &&
        password === ADMIN.password
    ) {

        req.session.isAdmin = true;

        return res.redirect("/admin/dashboard");

    }

    res.render("admin-login", {

        error: "Invalid email or password"

    });

});

app.get("/admin/dashboard", requireAdmin, (req, res) => {

    res.render("dashboard", {
        students
    });

});

app.get("/admin/register", requireAdmin, (req, res) => {

    res.render("admin-register", {
        error: null,
        formData: {}
    });

});

app.get("/admin/students", requireAdmin, (req, res) => {

    res.render("students", {
        students
    });

});

app.get("/admin/logout", (req, res) => {

    req.session.destroy(() => {

        res.redirect("/admin");

    });

});

app.get("/admin/analytics", requireAdmin, (req, res) => {
    res.send("<h2>Analytics Coming Soon 🚀</h2>");
});

app.get("/admin/settings", requireAdmin, (req, res) => {
    res.send("<h2>Settings Coming Soon ⚙️</h2>");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});