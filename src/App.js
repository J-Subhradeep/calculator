import React,{useState} from 'react'
import Calc from './Calc';  
import './App.css'; 
import numbers from './Numbers'
import op from './Operators'
export default function App() {
  const [state,setState] = useState(numbers);
  const [heading,setHeading] = useState("Hallow");
  return(
    <>
  {/* <Nav/> */}
        <ul className="nav justify-content-center my-3"> 
        <li className="nav-item px-3">
        <button type="button" className="btn btn-primary"  onClick={()=>{setState(numbers);setHeading("");}}>Normal</button>
        </li>
        <li className="nav-item px-3">
        <button type="button" className="btn btn-primary" id="scy"  onClick={()=>{setState(op);setHeading("Use sin(x deg) to get sin value of x degree, otherwise use sin(x) to get the sin value of x radian");}}>Scientific</button>
        </li>
        </ul>
  <Calc arr={state} heading={heading}/>

    </>
  )
}