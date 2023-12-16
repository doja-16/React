import React, {useState} from 'react'
export default function StateHoldObject()
{
    const[college,setCollege]=useState({cid:1 ,cname:"skct", year:"2023"})
    const changeDemo=()=>{
        setCollege((prevState)=>{return{...prevState,year:2024}})
    }
    const changecol=()=>{
        setCollege((prevState)=>{return{...prevState,cname:"Krishna college"}})
    }

    return(
       <div>
        <h1> College ID id {college.cid}</h1>
        <h1> College name is {college.cname}</h1>
        <h1> Year {college.year}</h1>
        <button onClick={changeDemo}>Change year</button>
        <button onClick={changecol}>Change college</button>

       </div>
    )
    
}