import { useState } from 'react'

const divStyle = {
  height: '100px',
  backgroundColor: 'green',
  margin: '20px',
}

function Children() {
  console.log('Children render!')

  const [state, setState] = useState(0)

  return (
    <div style={divStyle}>
      <div>{state}</div>
      <button onClick={() => setState((state) => state + 1)}>Click</button>
      Children!
    </div>
  )
}

export default Children
