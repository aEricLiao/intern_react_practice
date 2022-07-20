import Card from './Card'

import Box from '@mui/material/Box'

function Container() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Card />
    </Box>
  )
}

export default Container
