import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import Header from 'components/Header';
import Introduction from '../Introduction';
import { renderChildren } from 'utils/router'
import { Grid, Typography, Paper } from '@material-ui/core';
import CodeRoute from 'routes/DevTasks/routes/Code';


function DevTasksPage({
  classes,
  auth,
  match,
}) {
  return (
    <Switch>
      {/* Child routes */}
      {/* {renderChildren([UserCasesRoute], match, { auth })} */}
      {renderChildren([CodeRoute], match, { auth })}
      {/* Main route */}
      <Route
        exact
        path={match.path}
        render={() => (

          <div className={classes.root}>
            <main className={classes.main}>
              <Grid spacing={8} container alignContent="center" justify="center">
                <Grid item sm={12} xs={12} lg={10} xl={10} md={10}>
                  <Header title="Desenvolvimento" subtitle="Código" />
                </Grid>
                <Grid item sm={12} xs={12} lg={10} xl={10} md={10}>
                  <Paper className={classes.introduction} elevation={1}>
                    <Introduction />
                  </Paper>
                </Grid>
              </Grid>
            </main>
          </div>
        )}
      />
    </Switch>
  )
}

DevTasksPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
}

export default DevTasksPage
