import React from 'react'

const Child = ({ someParentFunction }) => {

  const handleClick = (val) => {
    someParentFunction(val) 
  }

  return (
    <div>
      <button onClick={() => handleClick(true)}>Click Me</button>
    </div>
  )
}

export default Child