# 🎉 Event Registration System

A full-stack web application for managing event registrations using **React (Frontend)**, **Node.js (Backend)**, and **MySQL (Database)**.

---

## 🚀 Features

* 🧾 User Registration Form (Name, Email, Event)
* 🎨 Modern UI (Figma-based design with animations)
* 🔐 Prevent Duplicate Registrations (Unique Email)
* 📡 REST API Integration
* 💾 Data stored in MySQL database
* 📋 View all registrations

---

## 🛠️ Tech Stack

* **Frontend:** React + Vite + Tailwind CSS
* **Backend:** Node.js + Express
* **Database:** MySQL
* **Version Control:** Git + GitHub

---

## 📁 Project Structure

event-registration/
│── backend/
│ ├── server.js
│ ├── db.js
│ ├── routes/
│ └── package.json
│
│── frontend/
│ ├── src/
│ ├── package.json
│ └── vite.config.js

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repository

```bash
git clone https://github.com/vinzu-hub/event-registration-app.git
cd event-registration-app
```

---

### 🔹 2. Backend Setup

```bash
cd backend
npm install
node server.js
```

👉 Runs on: http://localhost:3000

---

### 🔹 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

👉 Runs on: http://localhost:5173

---

## 🗄️ Database Setup (MySQL)

```sql
CREATE DATABASE eventDB;

USE eventDB;

CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    event VARCHAR(100),
    email VARCHAR(150) UNIQUE
);
```

---

## 📡 API Endpoints

### 🔸 Register User

POST /api/register

### 🔸 Get All Registrations

GET /api/registrations

---

## 🧠 Key Concept

> Each email can register only once using UNIQUE constraint + backend validation.

---

## 📸 Screenshots

(Add your UI screenshots here)

---

## 👨‍💻 Author

**Vinay**
GitHub: https://github.com/vinzu-hub

---

## ⭐ Future Improvements

* Admin Dashboard
* Delete/Edit registrations
* Email confirmation system
* Deployment (Render / Vercel)

---

## 📌 Conclusion

This project demonstrates a complete full-stack application with frontend, backend, database, and API integration.
thank you.....👍😎


---

tha
