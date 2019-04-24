import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import TaskRoute from 'routes/Tasks/routes/Task'
import { renderChildren } from 'utils/router'

function TasksPage({
  classes,
  auth,
  match,
}) {
  return (
    <Switch>
      {/* Child routes */}
      {renderChildren([TaskRoute], match, { auth })}
      {/* Main Route */}
      <Route
        exact
        path={match.path}
        render={() => (
          <div className={classes.root}></div>
        )}
      />
    </Switch>
  )
}

TasksPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
}

export default TasksPage
