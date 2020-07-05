import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}))

export default function ChartsGrid (props) {
  const { title, demosList } = props
  const classes = useStyles()
  return (
    <div>
      <PageTitle title={title} />
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        {demosList.map(demo => {
          return (
            <Grid key={demo.key} item xs={6}>
              <ChartTitle title={demo.label} />
              <Paper className={classes.paper}>{demo.contents}</Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

function PageTitle (props) {
  const { title } = props
  return (
    <Typography variant='h4' gutterBottom>
      {title}
    </Typography>
  )
}

function ChartTitle (props) {
  const { title } = props
  return <Typography variant='h6'>{title}</Typography>
}
