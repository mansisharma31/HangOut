//import './App.css';
import React from 'react';
import Home from "./Screens/Home/Home.js";
// import 'swiper/swiper-bundle.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";

function App() {
  return (
    <Router> 
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
