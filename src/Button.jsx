import React from 'react'
import {evaluate} from 'mathjs'
export default function Button(props){
    return(
        <>
        <div className={props.cls}>
        <div className={`btnn ${props.cls}`} id="btntext"value={props.value} onClick={(event) =>{
            if(props.value!=='DEL'&&props.value!=='C'&&props.value!=='='){
            document.getElementById('field').innerHTML +=props.value;}
            if(props.value==='DEL'){
                let v = document.getElementById('field');
                let newValue = v.innerHTML.split('');
                newValue.splice(-1,1);
                v.innerHTML = newValue.toString().replaceAll(",","");
                
            }
            if(props.value==='C'){
                let v = document.getElementById('field');
                v.innerHTML ='';
            }
            try{

                if(props.value==='='){
                    let v = document.getElementById('field');
                    let ve = evaluate(v.innerHTML);
                    if(typeof ve!=='function'){
                        
                        v.innerHTML = ve;
                    }
                    else{
                        alert('equation not valid');
                    }
                }
            }catch{
                alert('equation not valid');
            }

            
        }} onChange={()=>{}} ><h3 id="btntext"> {props.value}</h3></div>
        </div>
        </>
    )
}