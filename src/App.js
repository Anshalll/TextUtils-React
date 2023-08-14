import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Main, Routes, Route } from "react-router-dom" 


function Show() {
  const [darkMode, setDarkMode] = useState("bg-white text-black");
  const [message, setMessage] = useState({
    color: "",
    msg: "",
  });

  const ToggleMode = () => {
    setMessage({
      color: "bg-green-700",
      msg: "Enabled Dark Mode",
    });

    setTimeout(() => {
      setMessage({
        msg: "",
        color: "",
      });
    }, 2000);

    if (darkMode === "bg-white text-black") {
      setDarkMode("bg-black text-white");
      document.body.style.backgroundColor = '#1A202C';
      document.body.style.color = "white";
      // Rest of your styling changes
    } else {
      setDarkMode("bg-white text-black");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";

      
      // Rest of your styling changes
    }
  }

  return (
    <>
          <Main>
          <Alert message={message} />
          <Navbar title="Text Utils" mode={darkMode} ToggleMode={ToggleMode} />

<Routes>
    <Route exact path='/' Component={TextForm} />
    <Route exact path='/about' Component={About} />



</Routes>

</Main>




  </>

  );
}

export default Show;
