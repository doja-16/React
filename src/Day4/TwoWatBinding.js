import React,{useState} from 'react'
export default function TwoWayBinding()
{
    const[name,setname] =useState("")

    const changeName=(event)=>setname(event.target.value)
    return (
        <div>
            TwoWayBinding
            <input onChange={changeName} value={name}></input>
            <p> the name is {name}</p>
        </div>
    )
}