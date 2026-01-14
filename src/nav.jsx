import React from 'react'

function nav({arr}) {
  return (
    <div>
      <nav>Home</nav>
      <nav>About</nav>
      <nav>Carrer</nav>
      <nav>Join</nav>
      {arr[0] > 7 ? "Greater": null}
      )
      

    </div>
  )
}

export default nav