/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';
// import About from './components/About';
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
  const toggleMode=() =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Darkmode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Lightmode has been enabled", "success");
    }
  }
  return (
    <>
      {/* darkmode is sent as props to Navbar component */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter your text below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
