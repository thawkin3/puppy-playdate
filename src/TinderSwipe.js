import React, { useMemo, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TinderCard from 'react-tinder-card'

import { PuppyCard } from './PuppyCard'
import { SwipeButtons } from './SwipeButtons'
import { ResultsScreen } from './ResultsScreen'
import { updatePuppyMatchedCount } from './graphQLUtils'

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
  const [likedPuppies, setLikedPuppies] = useState([])

  const handleMatchedCountChange = async (puppy) => {
    const { errors } = await updatePuppyMatchedCount(
      puppy.id,
      puppy.matchedCount + 1
    )

    if (errors) {
      console.error(errors)
    }
  }

  const swiped = (direction, puppy) => {
    puppyIdsAlreadyRemoved.current &&
      puppyIdsAlreadyRemoved.current.push(puppy.id)

    if (direction === 'right') {
      setLikedPuppies([...likedPuppies, puppy])
      handleMatchedCountChange(puppy)
    }

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
    fetchPuppyData()
    setSwipeCount(0)
    setLikedPuppies([])
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
          <PuppyCard puppy={puppy} />
        </TinderCard>
      ))}
      <SwipeButtons swipe={swipe} />
    </div>
  ) : (
    <ResultsScreen
      likedPuppies={likedPuppies}
      resetTinderApp={resetTinderApp}
    />
  )
}
