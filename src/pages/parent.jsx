import React from 'react'
import Child from '../components/child'

const Parent = () => {
  
	const someParentFunction = (val) => {
		alert(val)
	}
  
	return (
	  <div>
		<Child someParentFunction={someParentFunction}/>
	  </div>
	)
  }
  
  export default Parent