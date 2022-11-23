import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
