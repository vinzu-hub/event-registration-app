import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";
import "chart.js/auto";

export default function Admin() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    fetch("http://localhost:3000/api/registrations")
      .then(res => res.json())
      .then(result => setData(result));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/delete/${id}`, {
      method: "DELETE",
    }).then(() => fetchData());
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  const eventCount = {};
  data.forEach((item) => {
    eventCount[item.event] = (eventCount[item.event] || 0) + 1;
  });

  const chartData = {
    labels: Object.keys(eventCount),
    datasets: [
      {
        label: "Registrations",
        data: Object.values(eventCount),
        backgroundColor: ["#6366f1", "#8b5cf6", "#ec4899", "#22c55e"],
        borderRadius: 10,
      },
    ],
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #4c1d95)",
        padding: "30px",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", fontSize: "32px" }}
      >
        📊 Admin Dashboard
      </motion.h1>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(eventCount).map(([event, count]) => (
          <motion.div
            key={event}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "rgba(255,255,255,0.08)",
              padding: "20px",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              minWidth: "150px",
              textAlign: "center",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          >
            <h3>{event}</h3>
            <p style={{ fontSize: "24px" }}>{count}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Search */}
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "30px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
        }}
      />

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          marginTop: "30px",
          background: "rgba(255,255,255,0.08)",
          padding: "20px",
          borderRadius: "15px",
          height: "280px",
        }}
      >
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          marginTop: "30px",
          background: "rgba(255,255,255,0.08)",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <table style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Event</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <motion.tr
                key={item.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.event}</td>
                <td>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(item.id)}
                    style={{
                      background:
                        "linear-gradient(45deg, #ff416c, #ff4b2b)",
                      border: "none",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}