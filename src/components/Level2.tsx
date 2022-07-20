import Level3 from './Level3'

const divStyle = {
  height: '300px',
  backgroundColor: 'orange',
  margin: '30px',
}

function Level2() {
  return (
    <div style={divStyle}>
      Level2!
      <Level3 />
    </div>
  )
}

export default Level2
