import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercased successully!");
        let newUpText = text.toUpperCase();      //uppercasing the text
        setText(newUpText); //updating the statevariable via state to new uppercased text
        props.showAlert("Converted to uppercase", "success"); //sends an alert prompt using alert component
    }

    const handleLowClick = () => {
        console.log("Lowercased successully!");
        let newUpText = text.toLowerCase();      //lowercasing the text
        setText(newUpText); //updating the statevariable via state to new lowercased text
        props.showAlert("Converted to lowercase", "success"); //sends an alert prompt using alert component
    }

    const handleClearClick = () => {
        console.log("textbox cleared")
        let newText = " ";
        setText(newText)
        props.showAlert("Textbox cleared", "success"); //sends an alert prompt using alert component
    }

    const handleOnChange = (event) => {
        console.log("changed ");
        setText(event.target.value);    // seting value of state variable text to the text in textarea
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied successfully", "success"); //sends an alert prompt using alert component
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success"); //sends an alert prompt using alert component
    }

    // states
    const [value, setValue] = useState(1);
    const [text, setText] = useState('');
    return (
        <>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="d-inline container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <p className=''>{value}</p>
                <button className='btn btn-danger' onClick={() => setValue((value + 1))}>Increment Value</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p> {text.split(/\s/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "enter your text to preview"}</p>
            </div>
        </>
    )
}
