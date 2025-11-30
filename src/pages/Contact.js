import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#003366" }}>Contact Us</h2>

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <p>📍 Faculty of Engineering</p>
        <p>🏛️ University of Chittagong, Bangladesh</p>
        <p>📞 Phone: +880-1234-567890</p>
        <p>✉️ Email: engfaculty@cu.ac.bd</p>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
