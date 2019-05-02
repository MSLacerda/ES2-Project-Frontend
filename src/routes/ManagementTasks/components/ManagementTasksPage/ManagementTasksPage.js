import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import { renderChildren } from 'utils/router'
import { Grid, Typography } from '@material-ui/core';

function ManagementTasksPage({classes, auth}) {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Typography component="h4" variant="h4" className={classes.title}>
              Gerenciamento de Projetos
            </Typography>

            <Typography component="h6" variant="h6" className={classes.subtitle}>
              Casos de Uso
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className={classes.main}>
         
      </div>
    </div>
  )
}

ManagementTasksPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
}

export default ManagementTasksPage
