const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234", // 👈 apna password
  database: "eventDB"
});

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("DB Connected");
  }
});

// ✅ REGISTER
app.post("/register", (req, res) => {
  const { name, email, event } = req.body;

  // ❌ EMPTY CHECK
  if (!name || !email || !event) {
    return res.json({
      success: false,
      message: "All fields are required",
    });
  }

  const sql = "INSERT INTO registrations (name, email, event) VALUES (?, ?, ?)";

  db.query(sql, [name, email, event], (err, result) => {
    if (err) {
      return res.json({
        success: false,
        message: "Email already registered",
      });
    }

    res.json({ success: true });
  });
});

// ✅ GET ALL REGISTRATIONS (ADMIN PANEL KE LIYE)
app.get("/registrations", (req, res) => {
  const sql = "SELECT * FROM registrations ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ success: false });
    }

    res.json(result);
  });
});

// ✅ DELETE
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM registrations WHERE id = ?", [id], (err) => {
    if (err) return res.json({ message: "Error deleting" });
    res.json({ message: "Deleted successfully" });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});