import Children from './Children'

const divStyle = {
  height: '200px',
  backgroundColor: 'orange',
}

function Parent() {
  return (
    <div style={divStyle}>
      Parent!
      <Children />
    </div>
  )
}

export default Parent
