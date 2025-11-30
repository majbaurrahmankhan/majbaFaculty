import React, { useState } from "react";
import Footer from "../components/Footer";
import staffData from "../data/staff.json"; // src/data থেকে সরাসরি import

const Profile = () => {
  const [staff] = useState(staffData); // fetch ব্যবহার না করে সরাসরি data load

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#003366" }}>Faculty & Staff Members</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {staff.map((person, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              background: "#f2f2f2",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={`/images/${person.image}`}
              alt={person.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h3>{person.name}</h3>
            <p>📞 {person.phone}</p>
            <p>✉️ {person.email}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
