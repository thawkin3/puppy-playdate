import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from "@material-ui/core/Button";

import { updatePuppyMatchedStatus } from './graphQLUtils'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    textAlign: 'left',
  },
  media: {
    height: 320,
  },
  puppyIdNumber: {
    fontSize: 14,
    marginBottom: theme.spacing(4),
  },
  avatar: {
    height: theme.spacing(16),
    borderRadius: 0,
    marginBottom: theme.spacing(1),
  },
  cardActions: {
    justifyContent: 'center',
  },
  bio: {
    marginBottom: theme.spacing(2),
  }
}))

export function PuppyCard({ puppy, fetchPuppyData }) {
  const classes = useStyles()

  const handleMatchedChange = async () => {
    const { errors } = await updatePuppyMatchedStatus(
      puppy.id,
      !puppy.matched
    )

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
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/${puppy.profilePic}`}
        title={puppy.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {puppy.name}, {puppy.age}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p" className={classes.bio}>
          {puppy.bio}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>Interests:</b> {puppy.interests?.join(', ')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          See More
        </Button>
        <Button size="small" color="primary">
          {puppy.matched ? 'Unmatch' : 'Match'}
        </Button>
      </CardActions>
      <CardActions className={classes.cardActions}>
        <FormControlLabel
          control={
            <Switch
              checked={puppy.matched}
              onChange={handleMatchedChange}
              name="captured"
              color="primary"
            />
          }
          label="Matched"
        />
      </CardActions>
    </Card>
  )
}
