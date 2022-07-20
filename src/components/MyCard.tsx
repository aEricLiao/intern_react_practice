import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

function MyCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: '50%',
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Eric
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            frontend-engineer
          </Typography>
          <CardMedia
            component="img"
            height="194"
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            officiis expedita aperiam, totam officia fugit. Id, tenetur. Sequi,
            ullam veniam harum adipisci suscipit quas, possimus accusantium
            distinctio odio sit natus!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MyCard
