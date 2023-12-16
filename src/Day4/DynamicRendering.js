import React,{useState } from 'react'
export default function DynaamicRendering()
{
    const[x,setX]=useState(9)
    return(
        x>10 ? <p> the value is greater than 10</p> :
        <p> the value is less than 10</p>
    )
}