import "./App.css";
import Textinput from "./components/Textinput";
import { useState } from "react";
import About from "./components/About";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [change, setchange] = useState("");
  const [alert, setAlert] = useState("");
  const [mode, setmode] = useState("light");
  function showFunc(event) {
    setchange(event.target.value);
  }
  const conUpper = () => {
    let newText;
    newText = change.toUpperCase();
    setchange(newText);
    showAlert("Text converted to uppercase...", "success");
  };

  const conLower = () => {
    let newText;
    newText = change.toLowerCase();
    setchange(newText);
    showAlert("Text converted to lowercase...", "success");
  };

  const clearText = () => {
    setchange("");
    showAlert("All text cleared....", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(change);
    showAlert("All text copied...", "success");
  };

  const extraSpace = () => {
    let newText = change.split(/[ ]+/);
    setchange(newText.join(" "));

    showAlert("All extra space removed...", "success");
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert("");
    }, 1000);
  };

  const lightMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "hsl(195, 100%, 23%)";
      document.getElementById("dark").style.display = "block";
      document.getElementById("light").style.display = "none";
      setmode("dark");
    } else if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "hsl(195, 100%, 47%)";
      document.getElementById("dark").style.display = "none";
      document.getElementById("light").style.display = "block";
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Textinput
              mode={mode}
              lightMode={lightMode}
              alert={alert}
              change={change}
              showFunc={showFunc}
              buttonFunction={{
                conUpper,
                conLower,
                clearText,
                copyText,
                extraSpace,
              }}
            />
          }
        />
       <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
