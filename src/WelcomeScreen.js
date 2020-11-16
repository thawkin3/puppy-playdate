import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(50),
    maxWidth: '100%',
    margin: 'auto',
  },
  button: {
    marginTop: theme.spacing(4),
  },
}))

export const WelcomeScreen = ({ handleGetStartedClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <p>
        Every dog owner wants to find the perfect friends for their new puppy.
        Now we have an app for that!
      </p>
      <p>
        Browse through various puppy profiles and swipe right or left to find
        your new puppy friend.
      </p>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleGetStartedClick}
      >
        Get Started
      </Button>
    </div>
  )
}
