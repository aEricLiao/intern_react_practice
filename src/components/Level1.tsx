import Level2 from './Level2'

const divStyle = {
  height: '400px',
  backgroundColor: 'orange',
  margin: '20px',
}

function Level1() {
  const colorMap = {
    level3: 'blue',
    level4: 'green',
  }

  return (
    <div style={divStyle}>
      Level1!
      <Level2 />
    </div>
  )
}

export default Level1
