import './App.css';
import React from 'react';
import Home from './pages/homepage';
import ClassHome from './pages/classHome';
import ClassLinks from './pages/classLinks';
import Day1 from './pages/day1';
import Day2 from './pages/day2';
import Day3 from './pages/day3';
import Day4 from './pages/day4';
import Day5 from './pages/day5';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="startitup" element={<ClassHome />}>
          <Route index element={<ClassLinks />} />
          <Route path="day1" element={<Day1 />} />
          <Route path="day2" element={<Day2 />} />
          <Route path="day3" element={<Day3 />} />
          <Route path="day4" element={<Day4 />} />
          <Route path="day5" element={<Day5 />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
