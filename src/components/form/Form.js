import React,{useState,useRef, useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import {Namedata} from "../biodata/Biodata";
// import Header from "../header/Header";

function Value(){
    // const [personname, setpersonname] = useState(initialState)
    // eslint-disable-next-line no-unused-vars
    let {name,setname} = useContext(Namedata);
    const [show, setshow] = useState(false);
    const [show1, setshow1] = useState(false);
    useEffect(()=>{
        luckyName.current.focus();
    }, [])
    const luckyName = useRef("User");
    const submitform= (e)=>{
        e.preventDefault();
        const playername = luckyName.current.value;
        playername === "" ? alert("Please Enter your name") : setshow(true);
        setname(playername)
        setshow1(true);
    }
    
    // personname=luckyName.current.value;
    // console.log(personname)
    return <div>
        
        {/* <Biodata.Provider value={luckyName.current.value}> */}
        <form>
            <label>Enter your Name :</label>
            <input type="text" ref={luckyName}/>
            {/* <Biodata.Provider value ={playername}> */}
            <button onClick={submitform}>Enter</button>
            {/* </Biodata.Provider> */}
        </form>
        
        {/* </Biodata.Provider> */}
        <p>{show ? `${luckyName.current.value}, Which game you want to play?` : ""}</p>
        <div>{show1 ? <Button /> : null}</div>
        <div>
    {/* <Link to="/game1">
    <button>Game1</button>
    </Link>
    <Link to="/game2">
    <button>Game2</button>
    </Link> */}
    {/* {console.log(Biodata)} */}
</div>
    </div>  
    
}
const Button=()=>{
    return <div>
    <Link to="/game1">
    <button>Slot Machine </button>
    </Link>
    <Link to="/game2">
    <button>Tic-Tac-Toe</button>
    </Link>
    {/* {console.log(Biodata)} */}
</div>  
}

export default Value;

