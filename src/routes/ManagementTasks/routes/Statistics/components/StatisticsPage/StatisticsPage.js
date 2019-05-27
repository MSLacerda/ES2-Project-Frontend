import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import { Grid, Paper } from '@material-ui/core'

function StatisticsPage({ classes }) {
  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <Grid spacing={8} container alignContent="center" justify="center">
          <Grid item sm={12} xs={12} lg={10} xl={10} md={10}>
            <Header title="Estatísticas" />
          </Grid>
          <Grid item sm={12} xs={12} lg={10} xl={10} md={10}>
            <Paper className={classes.introduction} elevation={1}>
              <Grid container>
                <Grid item>
                  container
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}

StatisticsPage.propTypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default StatisticsPage
