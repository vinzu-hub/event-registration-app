🚀 Event Registration System (NEXUS 2026)

A modern full-stack event registration web application built with React, Node.js, Express, and MySQL.
Designed with a futuristic UI and an admin dashboard for managing registrations.

---

✨ Features

- 📝 User Registration Form
- 🎯 Custom Event Selection Dropdown
- 🔒 Duplicate Email Prevention (Unique Constraint)
- ⚡ Auto-generated Unique ID for each user
- ✅ Beautiful Success Screen (Access Granted UI)
- ❌ Error Handling (validation + duplicate email)
- 🧑‍💼 Admin Dashboard (view + delete registrations)
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

⚙️ Setup Instructions

1️⃣ Clone the repository

git clone https://github.com/YOUR_USERNAME/event-registration-app.git
cd event-registration

---

2️⃣ Backend Setup

cd backend
npm install
node server.js

---

3️⃣ Frontend Setup

cd frontend
npm install
npm run dev

---

🗄️ Database Setup

Run this in MySQL:

CREATE DATABASE eventDB;

USE eventDB;

CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150) UNIQUE,
  event VARCHAR(100)
);

---

📸 Screenshots

🔹 Registration Page

<img width="1904" height="898" alt="Screenshot 2026-04-04 225811" src="https://github.com/user-attachments/assets/31a8403e-5446-42eb-b0ba-c5a9c0606a21" />



🔹 Success Screen
<img width="1904" height="905" alt="Screenshot 2026-04-04 225820" src="https://github.com/user-attachments/assets/026e1068-7eff-4131-b974-6ecd9e8def5a" />


🔹 Admin Dashboard

<img width="1918" height="928" alt="Screenshot 2026-04-04 225834" src="https://github.com/user-attachments/assets/a53212bc-691b-4513-af7a-f74cba5b8cfa" />


---

🚀 Future Improvements

- 📧 Email confirmation system
- 📱 QR Code for entry
- 💳 Payment integration
- ☁️ Cloud deployment (Render / Vercel)

---

👨‍💻 Author

Vinay

- GitHub: https://github.com/vinzu_boi

---

⭐ Support

If you like this project, give it a ⭐ on GitHub!
