import React from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Home from "./Components/Main/Home";
import Faculty from "./Components/Main/Faculty";
import VisionMission from "./Components/Main/VisionMission";
import Syllabus from "./Components/Main/Syllabus";
import Resources from "./Components/Main/Resources";
import Contact from "./Components/Main/Contact";
import Practices from "./Components/Main/Practices"
import RightLiving from "./Components/Main/RighLiving"
import Activity from "./Components/Main/Activity"
import Others from "./Components/Main/Others"

import "./App.css";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

function App() {
  return (
   <>
      <BrowserRouter>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/faculty" element={<Faculty/>}/>
          <Route path="/vision" element={<VisionMission/>}/>
          <Route path="/syllabus" element={<Syllabus/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/activity" element={<Activity/>}/>
          <Route path="/practices" element={<Practices/>}/>
          
          <Route path="/others" element={<Others/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
   </>
  );
}

export default App;
