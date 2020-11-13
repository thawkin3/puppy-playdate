import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import { fetchAllPuppies } from './graphQLUtils'
import { TinderSwipe } from './TinderSwipe'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#FFF',
  },
  header: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}))

export default function App() {
  const classes = useStyles()
  const [puppyData, setPuppyData] = React.useState(null)

  const fetchPuppyData = React.useCallback(async () => {
    const { errors, data } = await fetchAllPuppies()

    if (errors) {
      console.error(errors)
    }

    const result = data.queryPuppy.sort((puppyA, puppyB) =>
      puppyA.name < puppyB.name ? -1 : 1
    )

    setPuppyData(result)
  }, [])

  React.useEffect(() => {
    fetchPuppyData()
  }, [fetchPuppyData])

  return (
    <main className={classes.root}>
      <Container>
        <h1 className={classes.header}>Puppy Playdate</h1>
        {puppyData ? (
          <TinderSwipe puppyData={puppyData} fetchPuppyData={fetchPuppyData} />
        ) : (
          <div className={classes.loadingContainer}>
            <CircularProgress color="inherit" size={60} />
            <Typography className={classes.loadingText}>Loading</Typography>
          </div>
        )}
      </Container>
    </main>
  )
}
