import React from "react";

const Gameinput=(props) => {
    const style={
        cursor:"Pointer",
        margin:"36.5px",
        background: "#4CAF50",
        border: "2px solid #white",
        color: "#white",
        padding: "1em 1em"
    }
    return <>
    <button style={style} onClick={props.change}>Click</button>
    </> ;
}

export default Gameinput;