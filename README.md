🚀 Event Registration System (NEXUS 2026)

A modern full-stack event registration web application built using React, Node.js, Express, and MySQL.
The system allows users to register for events and provides an admin dashboard to manage registrations.

---

✨ Features

- 📝 User Registration Form
- 🎯 Custom Event Selection Dropdown
- 🔒 Duplicate Email Prevention
- ⚡ Unique Access ID Generation
- ✅ Success Confirmation UI
- ❌ Error Handling & Validation
- 🧑‍💼 Admin Dashboard (View + Delete Users)
- 💾 MySQL Database Integration

---

🛠️ Tech Stack

Frontend

- React (Vite)
- CSS (Glassmorphism + Neon UI)

Backend

- Node.js
- Express.js

Database

- MySQL

---

📂 Project Structure

event-registration/
├── backend/
├── frontend/
├── README.md
├── package.json

---

⚙️ Prerequisites

Make sure you have installed:

- Node.js (v16 or above)
- MySQL Server
- Git

---

🗄️ Database Setup

Run the following commands in MySQL:

CREATE DATABASE eventDB;

USE eventDB;

CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150) UNIQUE,
  event VARCHAR(100)
);

---

🔧 Configuration

Open backend file ("server.js") and update your MySQL credentials:

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_PASSWORD",//1234
  database: "eventDB",
});

---

▶️ Run the Application

1️⃣ Start Backend Server

cd backend
npm install
node server.js

👉 Backend runs on: http://localhost:3000

---

2️⃣ Start Frontend

cd frontend
npm install
npm run dev

👉 Frontend runs on: http://localhost:5173

---

🌐 API Endpoints

Method| Endpoint| Description
POST| "/register"| Register a new user
GET| "/registrations"| Get all registrations
DELETE| "/delete/:id"| Delete a user

---

🧪 How to Use

1. Open frontend in browser
2. Fill the registration form
3. Submit details
4. View success screen with unique ID
5. Go to "/admin" to manage users

---

📸 Screenshots

🔹 Registration Page
<img width="1904" height="898" alt="Screenshot 2026-04-04 225811" src="https://github.com/user-attachments/assets/84d12f69-24d1-4117-8eef-0d075e9925aa" />


🔹 Success Screen

<img width="1904" height="905" alt="Screenshot 2026-04-04 225820" src="https://github.com/user-attachments/assets/1860c5ee-500b-4a3f-9825-a8e2d4c27228" />


🔹 Admin Dashboard

<img width="1918" height="928" alt="Screenshot 2026-04-04 225834" src="https://github.com/user-attachments/assets/73a35ec7-98c0-4b4a-9e27-1ec376961481" />


---

🚀 Future Improvements

- 📧 Email confirmation system
- 📱 QR code generation
- 💳 Payment integration
- ☁️ Cloud deployment (GCP / AWS)

---

👨‍💻 Author

Vinay
GitHub: https://github.com/vinzu-hub

---

⭐ Support

If you like this project, give it a ⭐ on GitHub!
