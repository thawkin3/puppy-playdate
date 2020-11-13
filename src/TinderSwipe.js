import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TinderCard from 'react-tinder-card'

import { PuppyCard } from './PuppyCard'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  swipeCard: {
    position: 'absolute',
    width: theme.spacing(75),
    maxWidth: '100%',
  },
}))

export const TinderSwipe = ({ puppyData, fetchPuppyData }) => {
  const classes = useStyles()
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className={classes.cardContainer}>
      {puppyData.map((puppy) => (
        <TinderCard className={classes.swipeCard} key={puppy.name} onSwipe={(dir) => swiped(dir, puppy.name)} onCardLeftScreen={() => outOfFrame(puppy.name)}>
          <PuppyCard puppy={puppy} fetchPuppyData={fetchPuppyData} />
        </TinderCard>
      ))}
    </div>
  )
}
