import React from "react";

const Gameinput=(props) => {
    const style={
        cursor:"Pointer",
        background:"#000",
        color:"#fff",
        margin:"36.5px",

    }
    return <>
    <button style={style} onClick={props.change}>Click</button>
    </> ;
}

export default Gameinput;