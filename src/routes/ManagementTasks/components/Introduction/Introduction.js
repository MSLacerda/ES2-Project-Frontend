import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import { renderChildren } from 'utils/router'
import { Grid, Typography, Button } from '@material-ui/core'
import Specification from 'components/Specification'

function Introduction({ classes, goToUserCases, specOpen, toggleSpec }) {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} lg={12} xl={12}>
        <Typography component="h4" variant="h4">
          Introdução
        </Typography>
      </Grid>

      <Grid item xs={12} lg={12} xl={12}>
        <p className={classes.description}>
          Olá, seja bem-vindo! Você acabou de ser contratada(o) pela Corporação
          Simples (CS) para desenvolver o novo processador MPS - (Máquina de
          Processamento Simples).
        </p>
      </Grid>

      <Grid item xs={12} lg={12} xl={12}>
        <p className={classes.description}>
          Para que você possa iniciar nessa nova jornada, jovem padawan, será
          necessário o download do kit de desenvolvimento Java que pode ser
          encontrado aqui, uma IDE ou editor da sua preferência e este arquivo
          que contém os recursos pré-definidos do MPS. Este processador conta
          com uma memória de 1000 células e 17 instruções, sendo que cada
          instrução ou variável ocupa uma célula inteira...
        </p>
      </Grid>

      <Button
        variant="outlined"
        onClick={() => toggleSpec(true)}
        className={classes.spec}>
        Ver mais sobre a especificação
      </Button>

      <Grid item xs={12} lg={12} xl={12}>
        <b>Boa sorte! E que começe os jogos!</b>
      </Grid>

      <Button
        onClick={goToUserCases}
        color="primary"
        variant="contained"
        className={classes.begin}>
        Começar
      </Button>

      <Specification opem={specOpen} specClose={() => toggleSpec(false)} />
    </Grid>
  )
}

Introduction.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  goToUserCases: PropTypes.func.isRequired,
  specOpen: PropTypes.bool,
  toggleSpec: PropTypes.func
}

export default Introduction
