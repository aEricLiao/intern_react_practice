import Level4 from './Level4'

const divStyle = {
  height: '200px',
  backgroundColor: 'orange',
  margin: '30px',
}

function Level3() {
  return (
    <div style={divStyle}>
      Level3 !<Level4 />
    </div>
  )
}

export default Level3
