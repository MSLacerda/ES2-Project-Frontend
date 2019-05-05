import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid, Paper } from '@material-ui/core';
import Header from 'components/Header';

function UserCases({ classes, userCases }) {
  console.log(userCases);
  return (
    <div className={classes.root}>
        <Grid spacing={8} container justify="center">
          <Grid item>
            <Header title="Caso 01" subtitle="Forme o caso de uso corretamente" />
          </Grid>
          <Grid item>
            <Paper elevation={1}>

            </Paper>
          </Grid>
        </Grid>
    </div>
  )
}

UserCases.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  userCases: PropTypes.object, // User cases of firebase database
}

export default UserCases
