import React, { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/pages/Navbar";
import Login from "./components/pages/Login";
import Update from "./components/pages/Update";
import AddItem from "./components/pages/AddItem";

export const EmailContext = createContext('');

function App() {
  const [email, setEmail] = useState('');

  return (
    <div>
     <EmailContext.Provider value={{ email, setEmail }}>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/> 
          <Route path="/login" element={<Login/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/add-item" element={<AddItem/>} />
        </Routes>
      </BrowserRouter>
     </EmailContext.Provider>
    </div>
  )
}

export default App
