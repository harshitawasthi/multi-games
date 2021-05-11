import React,{useContext} from "react";
import "./Header.css";
import {Namedata} from "../biodata/Biodata";

// import Value from "./headervalue/Entervalue";

// const Heading =() => {
//     const [personName, setName] = useState("User");

//     const Username= (e) =>{
//         setName(e.target.value);
//     }

//     return <div className="heading-wrapper">
//         <Value change={Username}/>
//         <h1 className="Heading-Name"><span>Hey {personName} ✋, </span>This is a Slot Machine Game 🎰</h1>
//         </div>;
// }

const Heading =() => {
    // const [personName, setName] = useState("User");

    // const Username= (e) =>{
    //     setName(e.target.value);
    // }
    const personname = useContext(Namedata);
    
    return <div className="heading-wrapper">
        {/* <Value /> */}
        <h1 className="Heading-Name"><span>Hey {personname.name}✋, </span>This is a Slot Machine Game 🎰</h1>
        </div>;
}
export default Heading;
