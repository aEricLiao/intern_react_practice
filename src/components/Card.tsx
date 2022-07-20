import { default as MuiCard } from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { users } from '../constants/users'

function Card() {
  const { name, content, title } = users[0]
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <MuiCard
        sx={{
          maxWidth: '50%',
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {title}
          </Typography>
          <CardMedia
            component="img"
            height="194"
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
          <Typography variant="body2">{content}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Next one</Button>
        </CardActions>
      </MuiCard>
    </Box>
  )
}

export default Card
