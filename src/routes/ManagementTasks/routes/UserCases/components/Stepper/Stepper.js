import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, Button, Typography, Grow } from '@material-ui/core'
import UserCase from '../UserCase'
import { map, shuffle } from 'lodash'

function Stepper({
  classes,
  stepperIndex,
  userCases,
  nextStep,
  prevStep,
  stepValidity
}) {
  let checked = true
  return (
    <Paper elevation={1}>
      <div className={classes.root}>
        <Grid container spacing={8}>
          {map(userCases, (el, index) => (
            <React.Fragment key={index}>
              {index === stepperIndex ? (
                <>
                  <Grid item xs={12} lg={12}>
                    <Typography variant="h4" component="h4">
                      História {index + 1}.
                    </Typography>
                  </Grid>
                  <Grow in={checked} mountOnEnter unmountOnExit>
                    <UserCase words={shuffle(el.words)} />
                  </Grow>
                </>
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
                stepValidity.validity || stepperIndex >= userCases.length
              }
              onClick={() => nextStep()}>
              Pronto
            </Button>
            {stepperIndex !== 0 ? (
              <Button
                color="secondary"
                className={classes.back}
                onClick={() => prevStep()}>
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
  userCases: PropTypes.array,
  stepperIndex: PropTypes.number,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  stepValidity: PropTypes.object
}

export default Stepper
