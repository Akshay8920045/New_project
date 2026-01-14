import React, { useState }  from 'react'
import Product from './product'
import Nav from './nav'


function App() {
  var [a, b] = useState(69);

  return (
    <div>
      
   <h1 className='bg-amber-300'>Hi this is my second react project</h1>
   <h2>{a+34}</h2>
   <button onClick={() => b(a+34)} className='px-1 py-1 bg-amber-500'>Click me</button>
   <nav>home</nav>
   <div></div>
   <Product naam  = "value"/>
   <nav arr ={[34,"ghfh",67]}/>
   </div>
   
  )
}

export default App