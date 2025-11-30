import React from "react";
import "./Home.css";
import Slider from "../components/Slider";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">


         {/* Slider added here */}
         
         <Slider />  



      <div className="home-header">
        <div className="home-text">
          <h1>Faculty of Engineering</h1>
          <p>
            The Faculty of Engineering at the University of Chittagong is dedicated 
            to providing quality education, research and innovation for future engineers.
          </p>
        </div>

        <div className="home-card">
          <Card
            image="gallery1.jpg"
            title="Our Mission"
            text="We aim to build skilled engineers for the future of technology."
          />
        </div>
      </div>

      <div className="home-section">
        <Card
          image="gallery2.jpg"
          title="Campus Environment"
          text="A modern environment with advanced engineering laboratories."
        />
        <Card
          image="staff1.jpg"
          title="Expert Faculty"
          text="Highly experienced teachers dedicated to student success."
        />

        <Card
          image="staff1.jpg"
          title="Expert Faculty"
          text="Highly experienced teachers dedicated to student success."
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
