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

const puppyIdsAlreadyRemoved = []

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
    puppyIdsAlreadyRemoved.push(puppy.id)
  }

  const swipe = (dir) => {
    const remainingPuppies = puppyData.filter(
      (puppy) => !puppyIdsAlreadyRemoved.includes(puppy.id)
    )
    if (remainingPuppies.length) {
      const puppyIdToBeRemoved = remainingPuppies[remainingPuppies.length - 1].id
      const puppyIdToBeRemovedIndex = puppyData.map((puppy) => puppy.id).indexOf(puppyIdToBeRemoved)
      puppyIdsAlreadyRemoved.push(puppyIdToBeRemoved)
      childRefs[puppyIdToBeRemovedIndex].current.swipe(dir)
    }
  }

  return (
    <div className={classes.cardContainer}>
      {puppyData.map((puppy, index) => (
        <TinderCard
          className={classes.swipeCard}
          key={puppy.id}
          onSwipe={(dir) => swiped(dir, puppy)}
          ref={childRefs[index]}
        >
          <PuppyCard puppy={puppy} fetchPuppyData={fetchPuppyData} />
        </TinderCard>
      ))}
      {puppyIdsAlreadyRemoved.length < puppyData.length && (<SwipeButtons swipe={swipe} />)}
    </div>
  )
}
