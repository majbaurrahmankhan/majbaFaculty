// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import "./Gallery.css";
// import galleryData from "../data/gallery.json"; // src/data থেকে import


// const Gallery = () => {
//   const [gallery] = useState(galleryData); // fetch এর বদলে সরাসরি import

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ color: "#003366" }}>Gallery</h2>

//       <div
//         style={{
//           marginTop: "20px",
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//         }}
//       >
//         {gallery.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               background: "#f2f2f2",
//               borderRadius: "10px",
//               padding: "10px",
//               textAlign: "center",
//             }}
//           >
//             <img
//               src={`/images/${item.image}`}
//               alt={item.caption}
//               style={{
//                 width: "100%",
//                 height: "160px",
//                 borderRadius: "10px",
//                 objectFit: "cover",
//               }}
//             />
//             <p style={{ marginTop: "8px" }}>{item.caption}</p>
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Gallery;


// import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";
// import "./Gallery.css";
// import galleryData from "../data/gallery.json"; // src/data থেকে import


// const Gallery = () => {
//   const [gallery, setGallery] = useState([]);
//   const [viewIndex, setViewIndex] = useState(null);

//   useEffect(() => {
//     fetch("/data/gallery.json")
//       .then((res) => res.json())
//       .then((data) => setGallery(data));
//   }, []);

//   const openViewer = (index) => {
//     setViewIndex(index);
//   };

//   const closeViewer = () => {
//     setViewIndex(null);
//   };

//   const showNext = () => {
//     setViewIndex((prev) => (prev + 1) % gallery.length);
//   };

//   const showPrev = () => {
//     setViewIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ color: "#003366" }}>Gallery</h2>

//       {/* Gallery Grid */}
//       <div className="gallery-grid">
//         {gallery.map((item, index) => (
//           <div className="gallery-card" key={index} onClick={() => openViewer(index)}>
//             <img src={`/images/${item.image}`} alt={item.caption} />
//             <p>{item.caption}</p>
//           </div>
//         ))}
//       </div>

//       {/* Full Screen Viewer */}
//       {viewIndex !== null && (
//         <div className="viewer-overlay" onClick={closeViewer}>
//           <div className="viewer-content" onClick={(e) => e.stopPropagation()}>
//             <button className="viewer-close" onClick={closeViewer}>✖</button>

//             <button className="viewer-prev" onClick={showPrev}>⟨</button>

//             <img
//               src={`/images/${gallery[viewIndex].image}`}
//               alt="fullscreen"
//               className="viewer-image"
//             />

//             <button className="viewer-next" onClick={showNext}>⟩</button>

//             <p className="viewer-caption">{gallery[viewIndex].caption}</p>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default Gallery;


// import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";

// const Gallery = () => {
//   const [gallery, setGallery] = useState([]);
//   const [viewIndex, setViewIndex] = useState(null);

//   useEffect(() => {
//     fetch("/data/gallery.json")
//       .then((res) => res.json())
//       .then((data) => setGallery(data));
//   }, []);

//   const openViewer = (index) => setViewIndex(index);
//   const closeViewer = () => setViewIndex(null);

//   const nextImage = () =>
//     setViewIndex((prev) => (prev + 1) % gallery.length);

//   const prevImage = () =>
//     setViewIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ color: "#003366" }}>Gallery</h2>

//       {/* Gallery Grid */}
//       <div
//         style={{
//           marginTop: "20px",
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//         }}
//       >
//         {gallery.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               background: "#f2f2f2",
//               borderRadius: "10px",
//               padding: "10px",
//               textAlign: "center",
//               cursor: "pointer",
//               transition: "0.3s",
//             }}
//             onClick={() => openViewer(index)}
//           >
//             <img
//               src={`/images/${item.image}`}
//               alt={item.caption}
//               style={{
//                 width: "100%",
//                 height: "160px",
//                 objectFit: "cover",
//                 borderRadius: "10px",
//               }}
//             />
//             <p style={{ marginTop: "8px" }}>{item.caption}</p>
//           </div>
//         ))}
//       </div>

//       {/* Full Screen Viewer */}
//       {viewIndex !== null && (
//         <div
//           onClick={closeViewer}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.85)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//         >
//           {/* Content Container */}
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{ position: "relative", textAlign: "center" }}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeViewer}
//               style={{
//                 position: "absolute",
//                 top: "-50px",
//                 right: "0",
//                 fontSize: "30px",
//                 background: "none",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               ✖
//             </button>

//             {/* Prev Button */}
//             <button
//               onClick={prevImage}
//               style={{
//                 position: "absolute",
//                 left: "-60px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 fontSize: "45px",
//                 background: "none",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               ⟨
//             </button>

//             {/* Image */}
//             <img
//               src={`/images/${gallery[viewIndex].image}`}
//               alt="fullscreen"
//               style={{
//                 maxWidth: "90vw",
//                 maxHeight: "80vh",
//                 borderRadius: "10px",
//                 boxShadow: "0 0 20px rgba(0,0,0,0.5)",
//               }}
//             />

//             {/* Next Button */}
//             <button
//               onClick={nextImage}
//               style={{
//                 position: "absolute",
//                 right: "-60px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 fontSize: "45px",
//                 background: "none",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               ⟩
//             </button>

//             {/* Caption */}
//             <p style={{ color: "white", marginTop: "10px", fontSize: "18px" }}>
//               {gallery[viewIndex].caption}
//             </p>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default Gallery;



import React, { useEffect, useState, useCallback } from "react";
import Footer from "../components/Footer";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [viewIndex, setViewIndex] = useState(null);

  // loadData: try fetch from public/data first; if that fails, try require from src/data
  useEffect(() => {
    let mounted = true;

    // try fetch from public/data/gallery.json (works if file is in public/data/)
    fetch("/data/gallery.json")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        if (mounted && Array.isArray(data)) setGallery(data);
      })
      .catch(() => {
        // fallback: try loading from src/data/gallery.json via require (works when file in src/data)
        try {
          // eslint-disable-next-line no-undef, global-require
          const data = require("../data/gallery.json");
          if (mounted && Array.isArray(data)) setGallery(data);
        } catch (err) {
          // both methods failed — keep gallery empty
          if (mounted) {
            console.warn("Could not load gallery.json via fetch or require. Check paths.");
            setGallery([]);
          }
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  // open viewer
  const openViewer = (index) => setViewIndex(index);

  // close viewer
  const closeViewer = useCallback(() => setViewIndex(null), []);

  // next / prev (wrap-around)
  const showNext = useCallback(() => {
    setViewIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % gallery.length;
    });
  }, [gallery.length]);

  const showPrev = useCallback(() => {
    setViewIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + gallery.length) % gallery.length;
    });
  }, [gallery.length]);

  // keyboard handlers for viewer
  useEffect(() => {
    if (viewIndex === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeViewer();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewIndex, closeViewer, showNext, showPrev]);

  // if no gallery items, show friendly message
  const renderEmpty = () => (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: "#003366" }}>Gallery</h2>
      <p>No images found. Make sure <code>gallery.json</code> exists and images are in <code>public/images/</code>.</p>
      <Footer />
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#003366" }}>Gallery</h2>

      {gallery.length === 0 ? (
        renderEmpty()
      ) : (
        <>
          {/* grid */}
          <div
            style={{
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {gallery.map((item, index) => (
              <div
                key={index}
                onClick={() => openViewer(index)}
                style={{
                  background: "#f2f2f2",
                  borderRadius: "10px",
                  padding: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "transform 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img
                  src={`/images/${item.image}`}
                  alt={item.caption || `image-${index}`}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
                <p style={{ marginTop: "8px", color: "#333" }}>{item.caption}</p>
              </div>
            ))}
          </div>

          {/* Full-screen viewer */}
          {viewIndex !== null && gallery[viewIndex] && (
            <div
              onClick={closeViewer}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.88)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
                padding: 20,
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "relative",
                  maxWidth: "95vw",
                  width: "900px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {/* Close */}
                <button
                  onClick={closeViewer}
                  aria-label="Close"
                  style={{
                    position: "absolute",
                    top: -40,
                    right: 0,
                    background: "transparent",
                    color: "white",
                    border: "none",
                    fontSize: 30,
                    cursor: "pointer",
                  }}
                >
                  ✖
                </button>

                {/* Prev */}
                <button
                  onClick={showPrev}
                  aria-label="Previous"
                  style={{
                    position: "absolute",
                    left: -60,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    color: "white",
                    border: "none",
                    fontSize: 44,
                    cursor: "pointer",
                    padding: 10,
                  }}
                >
                  ⟨
                </button>

                {/* Image */}
                <img
                  src={`/images/${gallery[viewIndex].image}`}
                  alt={gallery[viewIndex].caption || `image-${viewIndex}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    borderRadius: 8,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                  }}
                />

                {/* Next */}
                <button
                  onClick={showNext}
                  aria-label="Next"
                  style={{
                    position: "absolute",
                    right: -60,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    color: "white",
                    border: "none",
                    fontSize: 44,
                    cursor: "pointer",
                    padding: 10,
                  }}
                >
                  ⟩
                </button>

                {/* Caption */}
                <div style={{ marginTop: 12, color: "white", textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 600 }}>{gallery[viewIndex].caption}</div>
                  <div style={{ fontSize: 13, color: "#ddd", marginTop: 6 }}>
                    {viewIndex + 1} / {gallery.length}
                  </div>
                </div>
              </div>
            </div>
          )}

          <Footer />
        </>
      )}
    </div>
  );
};

export default Gallery;
