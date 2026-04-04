import { useEffect, useState } from "react";
import "./styles/admin.css";

export default function Admin() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/registrations");
    const result = await res.json();
    setData(result);
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:3000/delete/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">⚡ Admin Dashboard</h1>

      <div className="table-wrapper">
        <table>
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
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.event}</td>
                  <td>
                    <button onClick={() => deleteUser(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}