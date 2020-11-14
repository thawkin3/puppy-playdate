import React, { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TinderCard } from './ReactTinderCard'

import { PuppyCard } from './PuppyCard'

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

  const childRefs = useMemo(() => Array(puppyData.length).fill(0).map(i => React.createRef()), [puppyData.length])

  const swiped = (direction, nameToDelete) => {
    console.log(`swiped ${direction} on ${nameToDelete}`)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const swipe = (dir) => {
    console.log('swipe', dir)
    const cardsLeft = puppyData.filter(puppy => !alreadyRemoved.includes(puppy.id))
    console.log(cardsLeft)
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id // Find the card object to be removed
      console.log(toBeRemoved)
      
      const index = puppyData.map(puppy => puppy.id).indexOf(toBeRemoved) // Find the index of which to make the reference to
      console.log(index)

      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      console.log(alreadyRemoved)

      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div className={classes.cardContainer}>
      {puppyData.map((puppy, index) => (
        <TinderCard
          className={classes.swipeCard}
          key={puppy.id}
          onSwipe={(dir) => swiped(dir, puppy.name)}
          onCardLeftScreen={() => outOfFrame(puppy.name)}
          ref={childRefs[index]}
        >
          <PuppyCard puppy={puppy} fetchPuppyData={fetchPuppyData} swipe={swipe} />
        </TinderCard>
      ))}
    </div>
  )
}
