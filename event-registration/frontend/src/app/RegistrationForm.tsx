import { useState } from "react";
import "../styles/registration.css";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [success, setSuccess] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const generateId = () => {
    return "NEX-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !event) {
      setError("⚠️ Please fill all fields");
      return;
    }

    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, event }),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      setUniqueId(generateId());
      setError("");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="main">

      <nav className="navbar">
        <h1>NEXUS</h1>
        <button>INITIATE</button>
      </nav>

      <div className="left">
        <p className="tag">THE FUTURE AWAITS</p>
        <h1>NEXUS 2026</h1>
        <h3>March 15-17, 2026</h3>
        <p className="desc">
          The Future of Technology Summit – Join us for innovation and AI revolution.
        </p>
      </div>

      <div className="right">
        {!success ? (
          <form className="card" onSubmit={handleSubmit}>
            <h2>Register Now</h2>

            <input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* CUSTOM DROPDOWN */}
            <div className="dropdown">
              <div
                className="dropdown-selected"
                onClick={() => setOpen(!open)}
              >
                {event || "Select Event"}
              </div>

              {open && (
                <div className="dropdown-menu">
                  {[
                    "Conference Panel",
                    "Cybersecurity Workshop",
                    "Gen AI Workshop",
                    "Networking Gala",
                    "Startup Pitch",
                    "Tech Expo",
                  ].map((item) => (
                    <div
                      key={item}
                      className="dropdown-item"
                      onClick={() => {
                        setEvent(item);
                        setOpen(false);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button type="submit">INITIALIZE REGISTRATION</button>

            {error && <p className="error">❌ {error}</p>}
          </form>
        ) : (
          <div className="card success-card">
            <div className="check">✔</div>

            <h2>Access Granted</h2>

            <div className="info-box">
              <span>REGISTERED NAME</span>
              <p>{name}</p>
            </div>

            <div className="info-box">
              <span>EMAIL</span>
              <p>{email}</p>
            </div>

            <div className="uid-box">
              <span>UNIQUE ACCESS ID</span>
              <h3>{uniqueId}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}