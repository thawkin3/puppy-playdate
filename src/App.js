import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import PetsIcon from '@material-ui/icons/Pets'
import { useQuery, gql } from '@apollo/client'

import { WelcomeScreen } from './WelcomeScreen'
import { TinderSwipe } from './TinderSwipe'

const FETCH_ALL_PUPPIES = gql`
  query FetchAllPuppies {
    queryPuppy {
      id
      name
      age
      matchedCount
      profilePic
      bio
      interests
    }
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#FFF',
  },
  header: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  headerText: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export default function App() {
  const classes = useStyles()
  const [showWelcomeScreen, setShowWelcomeScreen] = React.useState(true)
  const { data, refetch } = useQuery(FETCH_ALL_PUPPIES)

  const puppyData =
    data &&
    [...data.queryPuppy].sort((puppyA, puppyB) =>
      puppyA.name > puppyB.name ? -1 : 1
    )

  return (
    <main className={classes.root}>
      <Container>
        <h1 className={classes.header}>
          <PetsIcon />
          <span className={classes.headerText}>Puppy Playdate</span>
          <PetsIcon />
        </h1>
        {showWelcomeScreen ? (
          <WelcomeScreen
            handleGetStartedClick={() => setShowWelcomeScreen(false)}
          />
        ) : puppyData ? (
          <TinderSwipe puppyData={puppyData} fetchPuppyData={refetch} />
        ) : (
          <div className={classes.loadingContainer}>
            <CircularProgress color="inherit" size={60} />
            <Typography className={classes.loadingText}>
              Fetching Puppies
            </Typography>
          </div>
        )}
      </Container>
    </main>
  )
}
