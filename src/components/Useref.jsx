import React, { useEffect } from 'react';
import { useRef } from 'react';

function Useref(){

    const username=useRef(null);

    useEffect(()=>{
        username.current.focus();
    },[])

    return(
        <div>
            <p>Login</p>
            <input type="text" placeholder='Enter Your username'  ref={username}/>
            <input type="text" placeholder='Enter Your password'/>
            <button>Submit</button>
        </div>
    )
}

export default Useref;