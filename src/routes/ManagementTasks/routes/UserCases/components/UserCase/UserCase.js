import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid, Paper, Chip } from '@material-ui/core'
import Header from 'components/Header'
import { map, shuffle } from 'lodash'

function UserCases({
  classes,
  words,
  addToActual,
  removeFromActual,
  actualUseCase
}) {
  return (
    <Grid className={classes.root} container spacing={8}>
      <Grid item xs={12} lg={12}>
        {actualUseCase.map((item, index) => (
          <Chip
            key={index}
            label={item}
            color="secondary"
            className={classes.chip}
            clickable
            onClick={() => {
              removeFromActual(index)
            }}
          />
        ))}
      </Grid>
      <Grid item xs={12} lg={12}>
        <Typography variant="h5" component="h5">
          Escolha as plavras para formar corretamente as histórias de usuário,
          de acordo com as especificações do projeto.
        </Typography>
      </Grid>
      <Grid item xs={12} lg={12}>
        {words.map((el, index) => (
          <Chip
            key={index}
            label={el}
            color="primary"
            className={classes.chip}
            clickable
            variant="outlined"
            onClick={() => {
              addToActual(el)
            }}
          />
        ))}
      </Grid>
    </Grid>
  )
}

UserCases.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  words: PropTypes.array,
  actualUseCase: PropTypes.array,
  addToActual: PropTypes.func,
  removeFromActual: PropTypes.func
}

export default UserCases
