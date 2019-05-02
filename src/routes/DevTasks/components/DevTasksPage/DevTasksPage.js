import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import { renderChildren } from 'utils/router'
import { Grid, Typography } from '@material-ui/core';

function DevTasksPage({
  classes,
  auth,
}) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h2" variant="h1">
          Gerenciamento de Projetos
        </Typography>
      </Grid>
    </Grid>
  )
}

DevTasksPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
}

export default DevTasksPage
