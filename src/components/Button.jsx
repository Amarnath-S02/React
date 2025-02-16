function Button(){
  let count=0;
    // const handleClick=(name)=>{
    //     if(count<3)
    //       {
    //         count++;
    //         console.log(`${name} Dont Click Me..!`)
    //       }
    //     else{
    //         console.log(`${name}  You clicked ${count} times ` )
    //     } 
    // }

    const  handleClick=(e)=>{

        e.target.textContent= "Dont Click Me";

    }
   
    return (
           
        <div>
       {/* <button onClick={()=> handleClick("Amar")}>Click Me</button> */}
       <button onClick={(e)=> handleClick(e)}>Click Me</button>
       </div>
    );
}


export default  Button;