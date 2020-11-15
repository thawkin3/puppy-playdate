import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles((theme) => ({
  swipeButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
}))

export const SwipeButtons = ({ swipe }) => {
  const classes = useStyles()

  return (
    <div className={classes.swipeButtonsContainer}>
      <Tooltip title="No thanks..." aria-label="No thanks..." arrow>
        <Fab
          aria-label="No thanks..."
          color="secondary"
          onClick={() => swipe('left')}
        >
          <CloseIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Yes!" aria-label="Yes!" arrow>
        <Fab aria-label="Yes!" color="primary" onClick={() => swipe('right')}>
          <FavoriteIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}
