import React, { useState } from 'react'

function Form() {
  let[name, setName] = useState ("Akshay");
  let handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <form><input placeholder='Enter the name' className='border-s-black p-2.5'  value={name} onChange={handleChange}/>
    <button className='border-s-amber-300 bg-amber-600' >Submit</button>
    </form>

  )
}

export default Form