import React, { useState } from 'react'

function Commentform() {
  let [FieldName, setName] = useState({
    name: "",
    comments: ""
});
  

  let handleEvent = (event) =>{
    setName(event.target.value);
  }
  
  return (
    <div>
      <h1>Enter the details</h1>
    <form >
      <label htmlFor="Name"></label>
      
      <input type="text" placeholder='Enter your name' className='border-s-black p-2.5' id='Name' onChange={handleEvent}/>
      <label htmlFor="Comments"></label>
      <input type="text" placeholder='Enter your comments' className='border-s-black p-2.5' onChange={handleEvent} id='Comments'/>
      <button className='border-s-amber-300 bg-amber-600'>Submit</button>
    </form>
    </div>
  )
}

export default Commentform