import React, { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TinderCard from 'react-tinder-card'

import { PuppyCard } from './PuppyCard'
import { SwipeButtons } from './SwipeButtons'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    width: theme.spacing(75),
    maxWidth: '100%',
    height: theme.spacing(80),
  },
  swipeCard: {
    position: 'absolute',
    width: theme.spacing(75),
    maxWidth: '100%',
    height: theme.spacing(80),
  },
}))

const alreadyRemoved = []

export const TinderSwipe = ({ puppyData, fetchPuppyData }) => {
  const classes = useStyles()

  const childRefs = useMemo(
    () =>
      Array(puppyData.length)
        .fill(0)
        .map((i) => React.createRef()),
    [puppyData.length]
  )

  const swiped = (direction, puppy) => {
    console.log(`swiped ${direction} on ${puppy.name}`)
    alreadyRemoved.push(puppy.id)
  }

  const outOfFrame = (puppy) => {
    console.log(puppy.name + ' left the screen!')
  }

  const swipe = (dir) => {
    console.log('swipe', dir)
    const cardsLeft = puppyData.filter(
      (puppy) => !alreadyRemoved.includes(puppy.id)
    )
    console.log(cardsLeft)
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id
      const index = puppyData.map((puppy) => puppy.id).indexOf(toBeRemoved)
      alreadyRemoved.push(toBeRemoved)
      childRefs[index].current.swipe(dir)
    }
  }

  return (
    <div className={classes.cardContainer}>
      {puppyData.map((puppy, index) => (
        <TinderCard
          className={classes.swipeCard}
          key={puppy.id}
          onSwipe={(dir) => swiped(dir, puppy)}
          onCardLeftScreen={() => outOfFrame(puppy)}
          ref={childRefs[index]}
        >
          <PuppyCard puppy={puppy} fetchPuppyData={fetchPuppyData} />
        </TinderCard>
      ))}
      <SwipeButtons swipe={swipe} />
    </div>
  )
}
