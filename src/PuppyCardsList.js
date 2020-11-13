import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { PuppyCard } from './PuppyCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  noResultsContainer: {
    textAlign: 'center',
  },
  noResults: {
    color: '#FFF',
    fontSize: 24,
    textTransform: 'uppercase',
    marginTop: theme.spacing(6),
  },
}))

export function PuppyCardsList({ puppyData, fetchPuppyData }) {
  const classes = useStyles()

  return puppyData.length > 0 ? (
    <Grid container className={classes.root} spacing={2}>
      {puppyData.map((puppy) => (
        <Grid key={puppy.name} item xs={12} sm={6} md={4} lg={3}>
          <PuppyCard puppy={puppy} fetchPuppyData={fetchPuppyData} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div className={classes.noResultsContainer}>
      <Typography className={classes.noResults}>
        No results. Please try a different filter value.
      </Typography>
    </div>
  )
}
