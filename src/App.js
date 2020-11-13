import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import { PuppyCardsList } from './PuppyCardsList'
import { fetchAllPuppies } from './graphQLUtils'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#FFF',
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

    const result = data.queryPuppy.sort(
      (puppyA, puppyB) => puppyA.name < puppyB.name ? -1 : 1
    )

    setPuppyData(result)
  }, [])

  React.useEffect(() => {
    fetchPuppyData()
  }, [fetchPuppyData])

  return (
    <main className={classes.root}>
      <Container>
        <h1>Puppy Playdate</h1>
        {puppyData ? (
          <>
            <PuppyCardsList
              puppyData={puppyData}
              fetchPuppyData={fetchPuppyData}
            />
          </>
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
