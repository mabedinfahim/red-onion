import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Breakfast from './pages/Breakfast/Breakfast';
import Home from './pages/Home/Home/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/breakfast" element={<Breakfast/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
