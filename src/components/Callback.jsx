import React from 'react'

const  Callback=React.memo(({handleClick})=>{
    console.log("child Component is Running");
    return( <button onClick={handleClick}>count</button>)
   
  })

export default Callback