import React, { useState } from 'react'

export default function About(props) {
    // state hook for changing the color of accordion to white/black
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // })

    // //state hook for changing the state of button text
    // const [btntext, setBtnText] = useState("Enable dark mode")

    // // conditional to check current color of the accordion 
    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable light mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable dark mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode ===  'dark' ? 'rgb(36 74 104)' : 'white',
        
    }

    return (
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743',}}>
            <h1 className="my-2">About Aishwar</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> YOLO</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Life's good and what else do you want 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>WHY?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This app was create using react as a part of learning journey for react for which I took a quite a long time to complete I wish I could I've completed it earlier
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Dark Mode</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Darkmode gives darker and an aesthical look to the app
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
