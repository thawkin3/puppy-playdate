import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'

import { updatePuppyMatchedStatus } from './graphQLUtils'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    textAlign: 'left',
    height: theme.spacing(80),
    boxShadow: 'rgba(50, 50, 50, 0.08) 6px 8px 10px -3px',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: theme.spacing(50),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  bio: {
    marginBottom: theme.spacing(2),
  },
  cardActions: {
    justifyContent: 'space-around',
    marginBottom: theme.spacing(2),
  },
}))

export function PuppyCard({ puppy, fetchPuppyData, swipe }) {
  const classes = useStyles()

  const handleMatchedChange = async () => {
    const { errors } = await updatePuppyMatchedStatus(puppy.id, !puppy.matched)

    if (errors) {
      console.error(errors)
    }

    // Re-fetching all the data to make the top-level app aware of the data change.
    // This was especially important in getting it to remove a puppy from the UI
    // when the Captured filter was selected and then a previously captured puppy
    // was toggled to no longer be captured.
    fetchPuppyData()
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/${puppy.profilePic}`}
        title={puppy.name}
      />
      <div className={classes.cardContent}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {puppy.name}, {puppy.age}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.bio}
          >
            {puppy.bio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Interests:</b> {puppy.interests?.join(', ')}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Tooltip title="No thanks..." aria-label="No thanks..." arrow>
            <Fab aria-label="No thanks..." color="secondary" onClick={() => swipe('left')}>
              <CloseIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Yes!" aria-label="Yes!" arrow>
            <Fab aria-label="Yes!" color="primary" onClick={() => swipe('right')}>
              <FavoriteIcon />
            </Fab>
          </Tooltip>
        </CardActions>
      </div>
    </Card>
  )
}
