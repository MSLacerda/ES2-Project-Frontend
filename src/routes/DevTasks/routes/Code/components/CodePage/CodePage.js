import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid, Paper, Button, LinearProgress } from '@material-ui/core'
import Header from 'components/Header'
import MonacoEditor from 'react-monaco-editor'
import queryString from 'query-string'

function CodePage({ classes, code, history, location }) {
  let success
  let fails
  let total

  React.useEffect(() => {
    const parsedQueries = queryString.parse(location.search)

    success = parseInt(parsedQueries.success) || 0
    fails = parseInt(parsedQueries.fails) || 0
    total = success + fails

    console.log((success * 100) / total)
  }, [])

  return (
    <div className={classes.root}>
      <Grid spacing={8} container justify="center">
        <Grid item xs={12} sm={8} lg={8}>
          <Header title="Testes" subtitle="Resultado dos Testes" />
        </Grid>
        <Grid item xs={12} sm={8} lg={8}>
          <Paper elevation={1} className={classes.main}>
            <div className={classes.statistic}>
              <Typography component="h6" variant="h6">
                Aceitos:
              </Typography>
              <LinearProgress
                variant="determinate"
                className={classes.progressbar}
                value={(success * 100) / total}
              />
            </div>
            <div className={classes.statistic}>
              <Typography component="h6" variant="h6">
                Rejeitados:
              </Typography>
              <LinearProgress
                variant="determinate"
                className={classes.progressbar}
                value={(fails * 100) / total}
              />
            </div>
            <div className={classes.statistic}>
              <Typography component="h6" variant="h6">
                Total: 10
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

CodePage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  code: PropTypes.string
}

export default CodePage
