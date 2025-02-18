import React from "react";
import {useState} from "react";
import {useEffect} from "react";

function Display(){
    const[width,setWidth]=useState(window.innerWidth)
    const[height,setHeight]=useState(window.innerHeight)

    useEffect(()=>{
    
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added")

        return ()=>{
            window.removeEventListener("resize",handleResize);
            console.log("Event listener is Removed")
        }
    },[])


    useEffect(()=>{
        document.title=`Size: ${width} x ${height}`},[width,height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
         <p>Display Width:{width}px</p>
         <p>Display height:{height}px</p>
         </div>
    )
}

export default Display;