/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter your text below" />
      </div>
    </>
  );
}

export default App;
