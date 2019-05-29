import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'

function StatisticsPage({ classes, progress, history }) {
  return (
    <div className={classes.root}>
      <Grid spacing={8} container justify="center">
        <Grid item xs={12} sm={8} lg={8}>
          <Header title="Estatística" subtitle="Quantidade de tentativas" />
        </Grid>
        <Grid item xs={12} sm={8} lg={8}>
          <Paper
            className={classes.introduction}
            elevation={1}
            className={classes.main}>
            <div className={classes.statistic}>
              <Typography component="h6" variant="h6">
                Tentativas (Diagramas):
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
            <div className={classes.statistic}>
              <Typography component="h6" variant="h6">
                Tentativas (Histórias de usuário):
              </Typography>
              <LinearProgress
                variant="determinate"
                className={classes.progressbar}
                value={
                  (progress[0].userCaseTries * 100) /
                  (progress[0].diagramTries + progress[0].userCaseTries)
                }
              />
            </div>
            <div className={classes.statistic}>
              <Typography component="h6" variant="h6">
                Total:
                {' '.concat(
                  progress[0].userCaseTries + progress[0].diagramTries
                )}
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.goBack}
                onClick={history.goBack}>
                Voltar
              </Button>
            </div>
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
