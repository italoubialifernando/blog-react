import React from "react";
import { Route, Routes } from "react-router-dom";
import { FetchComments } from "./fetchComponents/FetchComments";
import { Home } from "./Components/Home";



export function App() {
  return (
    <div className="conteiner">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id/:userId" element={<FetchComments />} />
      </Routes>
    </div>
  )

}