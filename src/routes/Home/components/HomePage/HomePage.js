import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  ACCOUNT_PATH,
  LIST_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from 'constants/paths'
import { Typography, Button, Grid } from '@material-ui/core';

const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper'
const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

function Home({ classes, authExists, goTo }) {
  console.log(authExists);
  return (
    <div className={classes.root}>
      <Grid>
        <Grid item>
          <Typography variant="h1" component="h1" className={classes.hero}>
            Brand
          </Typography>
        </Grid>
        <Grid item>
          <p className={classes.description}>
            Bem-Vindo ao Lorem Ipsum dolor amit
          </p>
        </Grid>
        <Grid item>
          <div className={classes.buttons}>
            {authExists ? (
              <Button variant="outlined" className={classes.signup} onClick={() => goTo(LIST_PATH)}>
                Modulos
              </Button>
            ) : (
                <React.Fragment>
                  <Button variant="contained" color="secondary" className={classes.login} onClick={() => goTo(LOGIN_PATH)}>
                    Login
                </Button>
                  <Button variant="outlined" className={classes.signup} onClick={() => goTo(SIGNUP_PATH)}>
                    Cadastre-se
                </Button>
                </React.Fragment>
              )}
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  authExists: PropTypes.bool, // from enhancer (withProps - auth)
  goTo: PropTypes.func,
}

export default Home
