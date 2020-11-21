import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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
  sideBySideContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  previouslyMatched: {
    fontStyle: 'italic',
  },
  bio: {
    marginBottom: theme.spacing(2),
  },
}))

export function PuppyCard({ puppy }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/${puppy.profilePic}`}
        title={puppy.name}
      />
      <CardContent>
        <div className={classes.sideBySideContainer}>
          <Typography gutterBottom variant="h5" component="h2">
            {puppy.name}, {puppy.age}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.previouslyMatched}
          >
            Previously matched {puppy.matchedCount}{' '}
            {puppy.matchedCount === 1 ? 'time' : 'times'}
          </Typography>
        </div>
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
    </Card>
  )
}
