import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
