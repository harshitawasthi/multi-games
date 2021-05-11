import React,{ useState,createContext } from "react";
// import Form from "../form/Form";

const Namedata=createContext();
function Biodata(props){
    const [name, setname] = useState("")
    return <div>
        <Namedata.Provider value={{name,setname}}>
            {props.children} 
        </Namedata.Provider>
    </div>

}

export default Biodata;
export {Namedata};