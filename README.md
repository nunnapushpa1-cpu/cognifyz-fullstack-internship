# 🎓 Cognifyz Full Stack Development Internship

## Student Registration System

A Student Registration System developed using **Node.js**, **Express.js**, **EJS**, **Bootstrap 5**, **HTML**, **CSS**, and **JavaScript** as part of my **Full Stack Development Internship at Cognifyz Technologies**.

---

# 📌 Project Overview

This project is a complete Student Registration System that allows users to register, view, edit, and delete student records.

The application performs both **client-side** and **server-side validation**, provides a responsive Bootstrap interface, and exposes REST API endpoints for managing student data.

Student data is currently stored temporarily using an in-memory array.

---

# 🚀 Features

- Student Registration Form
- View Registered Students
- Edit Student Details
- Delete Student Details
- Client-side Validation
- Server-side Validation
- REST API (GET)
- REST API (POST)
- Responsive Bootstrap 5 UI
- Success Page
- Temporary Data Storage using Array

---

# 🛠️ Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)
- Node.js
- Express.js
- EJS

---

# 📁 Project Structure

```text
cognifyz-fullstack-internship/
│
├── public/
│   ├── style.css
│   └── validation.js
│
├── views/
│   ├── index.ejs
│   ├── students.ejs
│   ├── success.ejs
│   └── edit.ejs
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/nunnapushpa1-cpu/cognifyz-fullstack-internship.git
```

### Open Project

```bash
cd cognifyz-fullstack-internship
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
node app.js
```

### Open Browser

```
http://localhost:3000
```

---

# 🌐 REST API Endpoints

## Get All Students

```http
GET /api/students
```

Returns all registered students.

---

## Add Student

```http
POST /api/students
```

Example JSON:

```json
{
  "name": "Pushpa",
  "email": "pushpa@gmail.com",
  "phone": "9876543210",
  "address": "Vizag",
  "age": 20,
  "gender": "Female",
  "course": "Full Stack Development"
}
```

---

# 📚 Concepts Learned

- Express Server Setup
- Express Routing
- Middleware
- GET Requests
- POST Requests
- REST API Development
- CRUD Operations
- Request Body Handling
- EJS Template Engine
- Bootstrap 5
- Client-side Validation
- Server-side Validation
- Static File Serving
- Temporary Data Storage using Arrays
- Git & GitHub Workflow

---

# 🔮 Future Improvements

- MongoDB Database Integration
- User Authentication
- Search Students
- Pagination
- Dashboard
- Export Student Data (PDF / Excel)
- Image Upload

---

# 📷 Screenshots

## Student Registration Form

*(Add Screenshot)*

---

## Students List

*(Add Screenshot)*

---

## Edit Student

*(Add Screenshot)*

---

## Registration Success Page

*(Add Screenshot)*

---

# 👨‍💻 Author

**Nunna Pushpa**

Aspiring Full Stack Developer

Full Stack Development Intern @ Cognifyz Technologies

---

# 📌 Internship Progress

| Task | Status |
|------|--------|
| Task 1 | ✅ Completed |
| Task 2 | ✅ Completed |
| Task 3 | ✅ Completed |
| Task 4 | ✅ Completed |
| Task 5 | ✅ Completed |

---

⭐ If you found this project helpful, feel free to explore the repository.