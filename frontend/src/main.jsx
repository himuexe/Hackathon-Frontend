import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Events from "./components/events/events"
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
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <About />
            </div>
          }
        />
        <Route
          path="/events"
          element={
            <div className="events-bg">
              <Navbar />
              <Events />
            </div>
          }
        />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
