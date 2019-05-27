import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid, Grow, Paper, Button } from '@material-ui/core'
import Header from 'components/Header'
import { range } from 'lodash'
import UserCase from '../UserCase'
import Axios from 'axios'
import endpoints from 'constants/api'
import { getTip } from 'constants/tips'
import { MANAGEMENT_PATH, TASKS_PATH } from 'constants/paths'
import Specification from 'components/Specification'

function UserCases({
  classes,
  stepIndex,
  nextStep,
  prevStep,
  setStepIndex,
  selecteds,
  addToSelecteds,
  removeFromSelecteds,
  showSuccess,
  showError,
  tip,
  setTip,
  history,
  specOpen,
  toggleSpec,
  progress,
  setProgress
}) {
  let tries = 0
  let checked = true
  async function testStory() {
    const response = await Axios.put(
      `${endpoints.historiesUrl}/${++stepIndex}`,
      selecteds
    )

    if (/* response.data.correto */ true) {
      showSuccess('Combinação correta')

      setProgress(
        {
          storyStep: stepIndex
        },
        progress[0].id
      )
      nextStep()
    } else {
      if (progress[0].tries) {
        tries = progress[0].tries + 1
      } else {
        tries = 1
      }
      setProgress(
        {
          tries: tries
        },
        progress[0].id
      )
      setTip(getTip('stories'))
      showError('Combinação errada')
    }
  }

  if (progress[0] && progress[0].stories) {
    history.push(`${MANAGEMENT_PATH}/diagrams`)
  } else if (
    progress[0] &&
    progress[0].storyStep > 0 &&
    progress[0].storyStep !== stepIndex
  ) {
    setStepIndex(progress[0].storyStep)
  }

  return (
    <div className={classes.root}>
      <Grid spacing={8} container justify="center">
        <Grid item xs={12} sm={8} lg={8}>
          <Header
            title="Estórias de Usuário"
            subtitle="Organiza as palavras e forme uma estória de usuário"
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={8}>
          <Paper elevation={1}>
            {range(2).map(index => (
              <React.Fragment key={index}>
                {index === stepIndex ? (
                  <div className={classes.questions}>
                    <Grid item xs={12} lg={12}>
                      <Typography
                        variant="h4"
                        component="h4"
                        className={classes.caseTitle}>
                        História {index + 1}.
                      </Typography>
                      <Button
                        className={classes.spec}
                        onClick={() => toggleSpec(true)}>
                        Visualizar Especificação
                      </Button>
                    </Grid>
                    <Grow in={checked} mountOnEnter unmountOnExit>
                      <UserCase
                        index={index}
                        selecteds={selecteds}
                        addToSelecteds={addToSelecteds}
                        removeFromSelecteds={removeFromSelecteds}
                      />
                    </Grow>
                  </div>
                ) : (
                  <> </>
                )}
              </React.Fragment>
            ))}
            <>
              {stepIndex >= 2 ? (
                <>
                  <Typography
                    variant="h6"
                    component="h6"
                    className={classes.caseTitle}>
                    Parabéns por finalizar as estórias do usuário!
                  </Typography>
                </>
              ) : (
                <></>
              )}
            </>
            <div className={classes.control}>
              {stepIndex >= 2 ? (
                <>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.next}
                    onClick={() => history.push(`${MANAGEMENT_PATH}/diagrams`)}>
                    Próximo Desafio
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.prev}
                    disabled={stepIndex === 0}
                    onClick={() => {
                      setProgress(
                        { storyStep: 0, stories: false, tries: 0 },
                        progress[0].id,
                        true
                      )
                    }}>
                    Resetar
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.next}
                    onClick={() => testStory()}>
                    Pronto
                  </Button>
                </>
              )}
            </div>
            <div className={classes.hints}>
              {tip.length > 0 ? (
                <Paper elevation={1} className={classes.hint}>
                  <b> Dica: </b>
                  {tip}
                </Paper>
              ) : (
                ''
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Specification open={specOpen} specClose={() => toggleSpec(false)} />
    </div>
  )
}

UserCases.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  setStepIndex: PropTypes.func,
  addToSelecteds: PropTypes.func,
  removeFromSelecteds: PropTypes.func,
  testStory: PropTypes.func,
  setTip: PropTypes.func,
  toggleSpec: PropTypes.func,
  setProgress: PropTypes.func,
  selecteds: PropTypes.array,
  userCases: PropTypes.array, // User cases of firebase database
  progress: PropTypes.array,
  specOpen: PropTypes.bool,
  history: PropTypes.object,
  tip: PropTypes.string,
  stepIndex: PropTypes.number
}

export default UserCases
