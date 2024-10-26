import React from "react";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"; 
import Footer from "./components/Footer/Footer";

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Readings from "./components/Readings/Readings";
import Central from "./components/Central/Central";

function App() {
  return (
      <Router>
        <Header/>
        <div className="app-container">
          <div className="page-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/central/:id/:name/:location/readings/:type" element={<Readings/>} />
                <Route path="/central/:id/:name/:location" element={<Central/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>

        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </Router>
      

  );
}

export default App;

