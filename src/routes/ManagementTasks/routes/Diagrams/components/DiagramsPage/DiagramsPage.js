import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid, Paper } from '@material-ui/core'
import Header from 'components/Header'

function DiagramsPage({ classes }) {
  return (
    <div className={classes.root}>
      <Grid spacing={8} container justify="center">
        <Grid item xs={12} sm={8} lg={8}>
          <Header
            title="Digrama: Caso Uso"
            subtitle="Preencha os Atores do Caso de Uso Abaixo"
          />
        </Grid>
      </Grid>
    </div>
  )
}

DiagramsPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  userCases: PropTypes.array // User cases of firebase database
}

export default DiagramsPage
