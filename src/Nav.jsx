import React from 'react'

export default function Nav(){
    return (
        <>
        <ul className="nav justify-content-center my-3">
        <li className="nav-item px-3">
        <button type="button" className="btn btn-primary" onClick={()=>{console.log('clicked');}}>Normal</button>
        </li>
        <li className="nav-item px-3">
        <button type="button" className="btn btn-primary" id="scy">Scientific</button>
        </li>
        </ul>
        </>
    );
}