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
import { MANAGEMENT_PATH } from 'constants/paths'
import Specification from 'components/Specification'

function UserCases({
  classes,
  stepIndex,
  nextStep,
  prevStep,
  selecteds,
  addToSelecteds,
  removeFromSelecteds,
  showSuccess,
  showError,
  tip,
  setTip,
  history,
  specOpen,
  toggleSpec
}) {
  let checked = true

  async function testStory() {
    const response = await Axios.put(
      `${endpoints.historiesUrl}/${++stepIndex}`,
      selecteds
    )

    if (true) {
      showSuccess('Combinação correta')
      nextStep()
    } else {
      setTip(getTip('stories'))
      showError('Combinação errada')
    }
  }
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
          <Paper elevation={1}>
            {range(2).map(index => (
              <React.Fragment key={index}>
                {index === stepIndex ? (
                  <>
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
                  </>
                ) : (
                  <> </>
                )}
              </React.Fragment>
            ))}
            <>
              {stepIndex >= 2 ? (
                <>
                  <Typography
                    variant="h4"
                    component="h4"
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
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.next}
                  onClick={() => history.push(`${MANAGEMENT_PATH}/diagrams`)}>
                  Próximo Desafio
                </Button>
              ) : (
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.next}
                  onClick={() => testStory()}>
                  Pronto
                </Button>
              )}
              <Button
                variant="contained"
                className={classes.prev}
                disabled={stepIndex === 0}
                onClick={() => prevStep(2)}>
                Voltar
              </Button>
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
  userCases: PropTypes.array, // User cases of firebase database
  stepIndex: PropTypes.number,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  selecteds: PropTypes.array,
  addToSelecteds: PropTypes.func,
  removeFromSelecteds: PropTypes.func,
  testStory: PropTypes.func,
  tip: PropTypes.string,
  setTip: PropTypes.func,
  history: PropTypes.object,
  toggleSpec: PropTypes.func,
  specOpen: PropTypes.bool
}

export default UserCases
