import React, { useMemo, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
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

export const TinderSwipe = ({ puppyData, fetchPuppyData }) => {
  const classes = useStyles()

  const childRefs = useMemo(
    () =>
      Array(puppyData.length)
        .fill(0)
        .map((i) => React.createRef()),
    [puppyData.length]
  )

  const puppyIdsAlreadyRemoved = useRef([])

  const [swipeCount, setSwipeCount] = useState(0)

  const swiped = (direction, puppy) => {
    puppyIdsAlreadyRemoved.current &&
      puppyIdsAlreadyRemoved.current.push(puppy.id)
    setSwipeCount((swipeCount) => swipeCount + 1)
  }

  const swipe = (dir) => {
    const remainingPuppies = puppyData.filter(
      (puppy) =>
        !puppyIdsAlreadyRemoved.current ||
        !puppyIdsAlreadyRemoved.current?.includes(puppy.id)
    )
    if (remainingPuppies.length) {
      const puppyIdToBeRemoved =
        remainingPuppies[remainingPuppies.length - 1].id
      const puppyIdToBeRemovedIndex = puppyData
        .map((puppy) => puppy.id)
        .indexOf(puppyIdToBeRemoved)
      childRefs[puppyIdToBeRemovedIndex].current.swipe(dir)
    }
  }

  const resetTinderApp = () => {
    puppyIdsAlreadyRemoved.current = []
    setSwipeCount(0)
  }

  return swipeCount < puppyData.length ? (
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
      <SwipeButtons swipe={swipe} />
    </div>
  ) : (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={resetTinderApp}
    >
      Start Over
    </Button>
  )
}
