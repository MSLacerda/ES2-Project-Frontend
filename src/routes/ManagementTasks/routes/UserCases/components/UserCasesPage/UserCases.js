import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid, Paper } from '@material-ui/core'
import Header from 'components/Header'
import Stepper from '../Stepper'

function UserCases({ classes, userCases }) {
  console.log(userCases)
  return (
    <div className={classes.root}>
      <Grid spacing={8} container justify="center">
        <Grid item xs={12} sm={8} lg={8}>
          <Header
            title="Histórias de Usuário"
            subtitle="Forme o texto corretamente corretamente"
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={8}>
          <Stepper userCases={userCases} />
        </Grid>
      </Grid>
    </div>
  )
}

UserCases.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  userCases: PropTypes.array // User cases of firebase database
}

export default UserCases
