import React, { useState } from 'react'



export default function Textform(props) {
    const handleUpClick= () =>{
        console.log("Uppercased successully!");
        let newUpText= text.toUpperCase();      //uppercasing the text
        setText(newUpText); //updating the statevariable via state to new uppercased text
    }
    const handleOnChange=(event) =>{
        console.log("changed ");
        setText(event.target.value);    // seting value of state variable text to the text in textarea
    }

    const handleLowClick= () =>{
        console.log("Lowercased successully!");
    }
    const [value, setValue] = useState(1);
    const [text, setText] = useState('enter text here');
    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <div className="container my-4">
                <p className=''>{value}</p>
                <button className='btn btn-danger' onClick={() => setValue((value + 1))}>Increment Value</button>
            </div>
        </>
    )
}
