import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid, Chip, Fade } from '@material-ui/core'

function UserCases({
  classes,
  story,
  selecteds,
  addToSelecteds,
  removeFromSelecteds
}) {
  let checked = true
  return (
    <Grid className={classes.root} container spacing={8}>
      <Grid item xs={12} lg={12}>
        {selecteds.map((item, index) => (
          <Chip
            key={index}
            label={item.conteudo}
            color="secondary"
            className={classes.chip}
            clickable
            onClick={() => removeFromSelecteds(item.p_estoria)}
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
        {story.map((el, index) => (
          <Fade
            key={index}
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 200 * (index + 1) } : {})}>
            <Chip
              label={el.conteudo}
              color="primary"
              className={classes.chip}
              clickable
              variant="outlined"
              onClick={() => addToSelecteds(el)}
            />
          </Fade>
        ))}
      </Grid>
    </Grid>
  )
}

UserCases.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  story: PropTypes.array,
  selecteds: PropTypes.array,
  addToSelecteds: PropTypes.func,
  removeFromSelecteds: PropTypes.func
}

export default UserCases
