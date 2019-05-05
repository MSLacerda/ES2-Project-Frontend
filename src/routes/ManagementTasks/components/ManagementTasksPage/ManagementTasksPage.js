import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import { renderChildren } from 'utils/router'
import { Paper, Grid } from '@material-ui/core';
import Introduction from '../Introduction';
import Header from 'components/Header';
import UserCasesRoute from 'routes/ManagementTasks/routes/UserCases';
import DiagramsRoute from 'routes/ManagementTasks/routes/Diagrams';

function ManagementTasksPage({ classes, match, auth }) {
  return (
    <Switch>
      {/* Child routes */}
      {renderChildren([UserCasesRoute], match, { auth })}
      {renderChildren([DiagramsRoute], match, { auth })}
      {/* Main route */}
      <Route
        exact
        path={match.path}
        render={() => (

          <div className={classes.root}>
            <main className={classes.main}>
              <Grid spacing={8} container alignContent="center" justify="center">
                <Grid item sm={12} xs={12} lg={10} xl={10} md={10}>
                  <Header title="Gerenciamento de Projetos" subtitle="Casos de Uso" />
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

ManagementTasksPage.propTypes = {
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
}

export default ManagementTasksPage
