/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  //state hook which is to used to toggle between light mode and dark mode
  const [mode, setMode] = useState('dark'); 

  // creating function to update state mode
  const toggleMode=() =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }
  }
  return (
    <>
      {/* darkmode is sent as props to Navbar component */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <Textform heading="Enter your text below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
