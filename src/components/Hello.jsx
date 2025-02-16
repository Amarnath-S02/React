import React from 'react'
import "./hello.scss"
function Hello ({user}){

    
      

    
   function displayEmail()
   {
    const email="skamar003gmail.com";
    return email;
   }
   return (
   <div className='hello'>
        Hello from Hello component..!
        <div className='name'>
        <h1>{user.name}</h1>
            <div>{displayEmail()}</div>
            
        </div>
        
        <h2>{user.age}</h2>
    </div>

    )
    
       
    
}
export default Hello;