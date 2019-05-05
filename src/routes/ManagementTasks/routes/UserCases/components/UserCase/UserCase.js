import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid, Paper } from '@material-ui/core';
import Header from 'components/Header';

function UserCases({ classes }) {
  return (
    <div className={classes.root}>
        <Paper>
            
        </Paper>
    </div>
  )
}

UserCases.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
}

export default UserCases
