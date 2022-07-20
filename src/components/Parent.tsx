import { useState } from 'react'
import Children from './Children'

const divStyle = {
  height: '200px',
  backgroundColor: 'orange',
  margin: '100px',
}

function Parent() {
  const [state, setState] = useState(0)
  console.log('Parent render!')
  return (
    <div style={divStyle}>
      Parent!
      <div>{state}</div>
      <button onClick={() => setState((state) => state + 1)}>Click</button>
      <Children />
    </div>
  )
}

export default Parent
