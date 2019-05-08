import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid, Chip, Fade } from '@material-ui/core'

function UserCases({
  classes,
  words,
  updateSelecteds,
  selectedWords,
  stepperIndex,
  addWord,
  removeWord,
  setValidityStep
}) {
  const checked = true

  function update(word) {
    setValidityStep({ validity: !![...selectedWords, word].length })

    updateSelecteds({
      id: stepperIndex,
      useCase: [...selectedWords, word]
    })
  }

  function remove(id) {
    setValidityStep({
      validity: !selectedWords.filter((item, index) => index !== id).length
    })

    updateSelecteds({
      id: stepperIndex,
      useCase: selectedWords.filter((item, index) => index != id)
    })
  }

  return (
    <Grid className={classes.root} container spacing={8}>
      <Grid item xs={12} lg={12}>
        {selectedWords.map((item, index) => (
          <Chip
            key={index}
            label={item}
            color="secondary"
            className={classes.chip}
            clickable
            onClick={() => {
              removeWord(index)
              remove(index)
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
          <Fade
            key={index}
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 200 * (index + 1) } : {})}>
            <Chip
              label={el}
              color="primary"
              className={classes.chip}
              clickable
              variant="outlined"
              onClick={() => {
                addWord(el)
                update(el)
              }}
            />
          </Fade>
        ))}
      </Grid>
    </Grid>
  )
}

UserCases.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  addWord: PropTypes.func,
  removeWord: PropTypes.func,
  updateSelecteds: PropTypes.func,
  words: PropTypes.array,
  selectedWords: PropTypes.array,
  stepperIndex: PropTypes.number,
  setValidityStep: PropTypes.func
}

export default UserCases
