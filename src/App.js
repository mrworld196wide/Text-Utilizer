/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        {/* <Textform heading="Enter your text below" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
