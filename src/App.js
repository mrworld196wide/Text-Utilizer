/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';

// importing react router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  //state hook which is to used to toggle between light mode and dark mode
  const [mode, setMode] = useState('light');

  // creeating state for alert component
  const [alert, setAlert] = useState(null);

  // method for alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // creating function to update state mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Darkmode has been enabled", "success");
      document.title = "TextUtils - dark mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enabled", "success");
      document.title = "TextUtils - light mode";
    }
  }
  return (
    <>
      {/* darkmode is sent as props to Navbar component */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter your text below" mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
