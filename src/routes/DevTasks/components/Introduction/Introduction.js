import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import { renderChildren } from 'utils/router'
import { Grid, Typography, Button } from '@material-ui/core'

function Introduction({ classes, goToUserCases }) {
  return (
    <Grid container className={classes.root}>
      <Typography component="h4" variant="h4">
        Introdução
      </Typography>

      <p className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem
        dolor, gravida eget fermentum ac, imperdiet sed nulla. Fusce non felis
        tempus, egestas odio volutpat, fermentum justo. Curabitur bibendum nunc
        nec lorem vulputate sodales. Mauris pellentesque, dolor vitae lacinia
        finibus, dui metus consectetur nibh, quis suscipit nulla arcu lacinia
        turpis. Nunc aliquet feugiat justo quis porttitor. Praesent placerat,
        enim non scelerisque efficitur, metus purus gravida leo, vitae tincidunt
        leo augue convallis enim. Etiam scelerisque odio arcu, a pharetra elit
        volutpat non. Suspendisse mauris massa, hendrerit ac nulla vel,
        porttitor tincidunt velit.
      </p>

      <Button
        onClick={goToUserCases}
        color="primary"
        variant="contained"
        className={classes.begin}>
        Começar
      </Button>
    </Grid>
  )
}

Introduction.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  goToUserCases: PropTypes.func.isRequired
}

export default Introduction
