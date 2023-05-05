import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercased successully!");
        let newUpText = text.toUpperCase();      //uppercasing the text
        setText(newUpText); //updating the statevariable via state to new uppercased text
    }

    const handleLowClick = () => {
        console.log("Lowercased successully!");
        let newUpText = text.toLowerCase();      //lowercasing the text
        setText(newUpText); //updating the statevariable via state to new lowercased text
    }

    const handleClearClick = () => {
        console.log("textbox cleared")
        let newText = " ";
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("changed ");
        setText(event.target.value);    // seting value of state variable text to the text in textarea
    }

    const handleCopy = () => {
        alert("Copied succesfully!");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    // states
    const [value, setValue] = useState(1);
    const [text, setText] = useState('enter text here');
    return (
        <>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className="form-control" id="myBox" rows="8" value={text} 
                    onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
                    color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="d-inline container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <p className=''>{value}</p>
                <button className='btn btn-danger' onClick={() => setValue((value + 1))}>Increment Value</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"enter your text to preview"}</p>
            </div>
        </>
    )
}
