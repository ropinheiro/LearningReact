import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3)
  },
  chartContainer: {
    width: '1000px'
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
      <Grid container spacing={3} className={classes.chartContainer}>
        {demosList.map(demo => {
          return (
            <Grid key={demo.key} item>
              <ChartTitle title={demo.label} />
              {demo.contents}
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
  return (
    <center>
      <Typography variant='h6'>{title}</Typography>
    </center>
  )
}
