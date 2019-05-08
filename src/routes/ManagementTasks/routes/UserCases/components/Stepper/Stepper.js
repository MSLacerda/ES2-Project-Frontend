import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import UserCase from '../UserCase'
import { map, shuffle } from 'lodash'

function Stepper({
  classes,
  stepperIndex,
  userCases,
  actualUseCase,
  addToSelecteds,
  nextStep,
  prevStep
}) {
  return (
    <Paper elevation={1}>
      <div className={classes.root}>
        <Grid container spacing={8}>
          {map(userCases, (el, index) => (
            <React.Fragment key={index}>
              {index === stepperIndex ? (
                <UserCase words={shuffle(el.words)} />
              ) : (
                <> </>
              )}
            </React.Fragment>
          ))}

          <Grid item className={classes.controller} xs={12} lg={12}>
            <Button
              color="primary"
              variant="contained"
              className={classes.next}
              disabled={
                !actualUseCase.length || stepperIndex >= userCases.length
              }
              onClick={() => {
                addToSelecteds(stepperIndex, actualUseCase)
                nextStep()
              }}>
              Pronto
            </Button>
            {stepperIndex !== 0 ? (
              <Button color="secondary" className={classes.back}>
                Voltar
              </Button>
            ) : (
              <> </>
            )}
          </Grid>
        </Grid>
      </div>
    </Paper>
  )
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  addToSelecteds: PropTypes.func,
  userCases: PropTypes.array,
  actualUseCase: PropTypes.array,
  stepperIndex: PropTypes.number,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
}

export default Stepper
