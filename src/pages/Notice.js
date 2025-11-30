import React, { useState } from "react";
import Footer from "../components/Footer";
import noticesData from "../data/notices.json"; // src/data থেকে import

const Notice = () => {
  const [notices, setNotices] = useState(noticesData); // fetch এর বদলে সরাসরি import

  const deletePDF = (index) => {
    const newList = notices.filter((_, i) => i !== index);
    setNotices(newList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#003366" }}>Notice Board</h2>

      <ul style={{ marginTop: "20px" }}>
        {notices.map((notice, index) => (
          <li
            key={index}
            style={{
              background: "#f2f2f2",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a
              href={`/pdf/${notice.pdf}`}
              download
              style={{ fontWeight: "600", color: "#003366" }}
            >
              {notice.title}
            </a>

            <button
              onClick={() => deletePDF(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default Notice;
