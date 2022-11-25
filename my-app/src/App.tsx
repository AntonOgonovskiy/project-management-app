import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBoardModal from "./Components/CreateBoardModal/CreateBoardModal";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <>
      <Header />
      <CreateBoardModal />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
