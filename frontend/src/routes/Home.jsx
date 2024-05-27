import React, { useState } from "react";
import Layout from "../components/Layout";
import background from "../assets/home_first.png";
import Login from "../components/Login";
import Register from "../components/Register"; // Import the Register component

function Home() {
  const [showLogin, setShowLogin] = useState(true); // State to manage which form to show

  // Function to toggle between login and register forms
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Layout>
      <div
        className="flex flex-col sm:flex-row justify-center items-center w-full h-full"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Conditional rendering of either login or register form */}
        {showLogin ? (
          <Login onRegisterClick={toggleForm} /> // Pass the toggle function as a prop
        ) : (
          <Register onLoginClick={toggleForm} /> // Pass the toggle function as a prop
        )}
      </div>
    </Layout>
  );
}

export default Home;
