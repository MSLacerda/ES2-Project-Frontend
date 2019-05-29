import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import { Grid, Paper, Typography } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'

function StatisticsPage({ classes, progress }) {
  return (
    <div className={classes.root}>
      <Grid spacing={8} container alignContent="center" justify="center">
        <Grid item sm={12} xs={12} lg={10} xl={10} md={10}>
          <Header title="Estatísticas" />
        </Grid>
        <Grid item sm={12} xs={12} lg={10} xl={10} md={10}>
          <Paper
            className={classes.introduction}
            elevation={1}
            className={classes.main}>
            <Grid container>
              <Grid item>
                <div className={classes.statistic}>
                  <Typography component="h5" variant="h5">
                    Estátisticas (Diagramas):
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    className={classes.progressbar}
                    value={
                      (progress[0].diagramTries * 100) /
                      (progress[0].diagramTries + progress[0].userCaseTries)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

StatisticsPage.propTypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default StatisticsPage
