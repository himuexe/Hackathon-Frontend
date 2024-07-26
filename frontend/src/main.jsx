import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
    <Route
          path="/"
          className="bg"
          element={
            <div>
              <Navbar />
              <Hero />
            </div>
          }
        />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
