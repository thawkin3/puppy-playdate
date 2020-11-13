import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: '#FFF',
  },
}))

export default function App() {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Container>
        <h1>Puppy Playdate</h1>
        <p>Here is some text.</p>
      </Container>
    </main>
  )
}
